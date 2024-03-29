import {
  createErrorResponse,
  createJsonResponse,
  createStatusCodeResponse,
} from '@/utils/api-gateway'
import {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
} from 'aws-lambda'
import { AnySchema } from 'joi'
import createError from 'http-errors'
import pPipe from 'p-pipe'
import { parseAndValidate } from './validation'
import { wrapMiddlewareHandler as sentryWrapHandler } from './sentry'
import { logger } from './logging'

export const compose = pPipe

export type Context = {
  context: Record<string, any>
}

export type Handler<E = APIGatewayProxyEventV2> = (
  event: E,
) => Promise<APIGatewayProxyStructuredResultV2>

type EventProcessor = (request: APIGatewayRequest) => APIGatewayRequest
type EventProcessorPromise = (
  request: APIGatewayRequest,
) => Promise<APIGatewayRequest>
type EventHandler<R> = (request: APIGatewayRequest) => Promise<R>
type EventBodyHandler<T, R> = (request: APIGatewayRequestBody<T>) => Promise<R>
export type MiddlewareEventProcessor<R, T> =
  | EventProcessor
  | EventProcessorPromise
  | EventBodyHandler<T, R>
  | EventHandler<R>

export const createAuthenticatedApiGatewayHandlerBase = <R, T = any>(
  ...middleware: MiddlewareEventProcessor<R, T>[]
): Handler => {
  return sentryWrapHandler(
    formatApiGatewayResult(compose(combineRequest, ...middleware)),
  )
}

export const formatApiGatewayResult = <E = APIGatewayProxyEventV2>(
  innerFunction: (event: E) => any | void,
): Handler<E> => async (event: E) => {
  try {
    const result = await innerFunction(event)
    if (result) {
      return createJsonResponse(result)
    }
    return createStatusCodeResponse(204)
  } catch (error) {
    if (createError.isHttpError(error)) {
      return createErrorResponse(
        error.message,
        error.statusCode,
        error.otherProps,
      )
    }

    logger.error(error as Error)

    return createErrorResponse('An internal error occurred', 500)
  }
}

export type APIGatewayRequest = {
  [index: string]: any
  event: APIGatewayProxyEventV2
}

const combineRequest = (event: APIGatewayProxyEventV2): APIGatewayRequest => {
  return {
    event,
  }
}

export const setContext = (
  key: string,
  valueResolver: (e: APIGatewayRequest) => any | Promise<any>,
) => async (request: APIGatewayRequest): Promise<APIGatewayRequest> => {
  console.log('setContext start...');
  request[key] = await valueResolver(request)
  console.log('setContext end...');
  return request
}

export type APIGatewayRequestBody<T> = APIGatewayRequest & { body: T }

export const requireValidBody = <T>(schema: AnySchema) => (
  request: APIGatewayRequest,
): APIGatewayRequestBody<T> => {
  console.log('requireValidBody start...');
  const { body } = request.event
  if (!body) {
    throw new createError.BadRequest(
      `validation error: body was expected but empty`,
    )
  }

  const { error, value } = parseAndValidate<T>(body, schema)
  if (error) {
    throw new createError.BadRequest(
      `validation error: ${error.details.map((x) => x.message).join(', ')}`,
    )
  }
  console.log('requireValidBody end...');
  return { ...request, body: value }
}
