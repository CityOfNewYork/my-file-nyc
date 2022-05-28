import LogsClient, {
  InputLogEvent,
  OutputLogEvents,
} from 'aws-sdk/clients/cloudwatchlogs'
import { captureAWSClient } from 'aws-xray-sdk'

const logsClient = captureAWSClient(new LogsClient())

export type LogStream = {
  logGroupName: string
  logStreamName: string
}

export const createLogStream = async (
  logGroupName: string,
  logStreamName: string,
): Promise<LogStream> => {
  await logsClient
    .createLogStream(
      {
        logGroupName,
        logStreamName,
      },
      undefined,
    )
    .promise()
  return {
    logGroupName,
    logStreamName,
  }
}

export const getLogStreamNextSequenceToken = async (logStream: LogStream) => {
  const { logGroupName, logStreamName } = logStream
  const result = await logsClient
    .describeLogStreams(
      {
        logGroupName,
        logStreamNamePrefix: logStreamName,
        limit: 1,
      },
      undefined,
    )
    .promise()
  if (!result.logStreams || !result.logStreams.length) {
    await createLogStream(logGroupName, logStreamName)
    return undefined
  }
  return result.logStreams[0].uploadSequenceToken
}

export const putLogEvents = async (
  logStream: LogStream,
  logEvents: InputLogEvent[],
  sequenceToken: string | undefined,
) => {
  const { logGroupName, logStreamName } = logStream
  const result = await logsClient
    .putLogEvents(
      {
        logGroupName,
        logStreamName,
        sequenceToken,
        logEvents,
      },
      undefined,
    )
    .promise()
  return result.nextSequenceToken
}

export type GetLogEventsResponse = {
  events: OutputLogEvents | undefined
  nextBackwardToken?: string | undefined
  nextForwardToken?: string | undefined
  nextToken: string | undefined
}

export const getLogEvents = async (
  logStream: LogStream,
  token: string | undefined,
  limit = 50,
): Promise<GetLogEventsResponse> => {
  const { logGroupName, logStreamName } = logStream
  const oneYearInMilliseconds = ((60 * 60 * 24) * 365) * 1000;
  // const result = await logsClient
  //   .getLogEvents({ startTime: Date.now() - oneYearInMilliseconds, logGroupName, logStreamName, limit, nextToken: undefined }, undefined)
  //   .promise()
  const result = await logsClient
    .filterLogEvents({ logGroupName, logStreamNames: [logStreamName], nextToken: token }, undefined)
    .promise()
  console.log('log result')
  console.log(result)
  const { events, nextToken } = result
  return {
    events,
    nextToken,
  }
}
