import {
  CfnResource,
  Construct,
  CustomResource,
  Duration,
  RemovalPolicy,
  Stack,
  StackProps,
} from '@aws-cdk/core'
import {
  Function,
  LayerVersion,
  IFunction,
  ILayerVersion,
  Runtime,
  Code,
  FunctionProps,
  CfnFunction,
  Tracing,
} from '@aws-cdk/aws-lambda'
import { S3EventSource } from '@aws-cdk/aws-lambda-event-sources'
import { Bucket, HttpMethods, EventType } from '@aws-cdk/aws-s3'
import {
  OriginAccessIdentity,
  CloudFrontWebDistribution,
  SecurityPolicyProtocol,
} from '@aws-cdk/aws-cloudfront'
import { DataStoreStack } from './data-store-stack'
import { AuthStack } from './auth-stack'
import { Provider } from '@aws-cdk/custom-resources'
import {
  CfnLogGroup,
  ILogGroup,
  LogGroup,
  RetentionDays,
} from '@aws-cdk/aws-logs'
import { ISecret, Secret } from '@aws-cdk/aws-secretsmanager'
import {
  AnyPrincipal,
  Effect,
  Policy,
  PolicyStatement,
  Role,
  ServicePrincipal,
} from '@aws-cdk/aws-iam'
import { IKey, Key } from '@aws-cdk/aws-kms'
import { Certificate } from '@aws-cdk/aws-certificatemanager'
import {
  DomainMappingOptions,
  DomainName,
  HttpApi,
  HttpMethod,
  CorsHttpMethod,
  CfnRoute,
  CfnAuthorizer,
  CfnIntegration,
  CfnStage,
} from '@aws-cdk/aws-apigatewayv2'
import { ViewerCertificate } from '@aws-cdk/aws-cloudfront'
import {
  ARecord,
  HostedZone,
  IHostedZone,
  RecordTarget,
  HostedZoneAttributes,
} from '@aws-cdk/aws-route53'
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets'
import {
  CfnUserPoolClient,
  CfnUserPoolResourceServer,
  CfnUserPoolUICustomizationAttachment,
  OAuthScope,
  UserPool,
} from '@aws-cdk/aws-cognito'
import { HostedDomain } from './hosted-domain'
import { ISecurityGroup, IVpc } from '@aws-cdk/aws-ec2'
import { LambdaDestination } from '@aws-cdk/aws-lambda-destinations'
import { SqsEventSource } from '@aws-cdk/aws-lambda-event-sources'
import { Queue, IQueue } from '@aws-cdk/aws-sqs'
import { MinimalCloudFrontTarget } from './minimal-cloudfront-target'
import { EmailSender } from './email-sender'
import { getCognitoHostedLoginCss, pathToApiServiceLambda } from './utils'
import { StringParameter } from '@aws-cdk/aws-ssm'
import { ProvidedKeyDetails } from './provided-key'
import { SnsAction } from '@aws-cdk/aws-cloudwatch-actions'
import { Topic } from '@aws-cdk/aws-sns'
import { join } from 'path'

export interface ApiHostedDomain extends HostedDomain {
  /**
   * Whether to allow any host for the CORS policy.
   * Useful for development environments.
   * @default false
   */
  corsAllowAnyHost?: boolean
  corsAllowAdditionalOrigins?: boolean
  corsAdditionalOrigins?: string
}

export interface JwtConfiguration {
  /**
   * The audience (aud) of the JWT token
   */
  audience?: string[]

  /**
   * The issuer (iss) of the JWT token
   */
  issuer?: string

  /**
   * The URL for User Info for this service
   */
  userInfoEndpoint: string

  /**
   * The integration type, defaults to OAUTH
   */
  integrationType?: 'OAUTH' | 'NYCID_OAUTH'

  /**
   * If provided, will be resolved to a SSM Parameter Store String parameter for the shared secret signing key for auth integration
   */
  signingKeyParameterPath?: string

  /**
   * If provided, when a user attempts to use the platform with an unverified email address, they will be redirected to this endpoint.
   */
  emailUnverifiedRedirectEndpoint?: string
}

export interface MonitoringConfiguration {
  /**
   * Sentry DSN
   */
  sentryDsn?: string
}

export interface ThrottlingConfiguration {
  /**
   * Multiplyer for the burst limit throttling.
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-throttling.html
   */
  burstLimitMultiplier?: number
  /**
   * Multiplyer for the rate limit throttling.
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-throttling.html
   */
  rateLimitMultiplier?: number
}

export interface MonitoringConfiguration {
  /**
   * Sentry DSN
   */
  sentryDsn?: string
  /**
   * The SNS topic to deliver alert notifications to
   */
  alertsSnsTopicArn?: string
}

export interface ThrottlingConfiguration {
  /**
   * Multiplyer for the burst limit throttling.
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-throttling.html
   */
  burstLimitMultiplier?: number
  /**
   * Multiplyer for the rate limit throttling.
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-throttling.html
   */
  rateLimitMultiplier?: number
}

export interface ApiProps {
  api: HttpApi
  dbSecret: ISecret
  mySqlLayer: ILayerVersion
  gmLayer: ILayerVersion
  authorizer: CfnAuthorizer
}

export interface BucketPermissions {
  includeRead?: boolean
  includeWrite?: boolean
  includeDelete?: boolean
  includeTagging?: boolean
}

export interface SqsPermissions {
  includeWrite?: boolean
  includeDelete?: boolean
}

export interface LogGroupPermissions {
  includeRead?: boolean
  includeWrite?: boolean
}

export interface ThrottlingRouteSettings {
  ThrottlingBurstLimit: number
  ThrottlingRateLimit: number
  Route?: CfnResource
}
