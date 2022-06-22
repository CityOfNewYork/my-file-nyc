const {
  AWS_ACCOUNT_ID,
  AWS_DEFAULT_REGION,
  DATASTORE_STACK_NAME,
  CITY_STACK_NAME,
  SNS_TOPIC_ARN_PIPELINE_NOTIFICATION,
  AGENCY_EMAIL_DOMAIN_WHITELIST,
  EMAIL_SENDER_ADDRESS,
  EMAIL_SENDER_NAME,
  JWT_AUTH_INTEGRATION_TYPE,
  JWT_AUTH_SIGNING_KEY_PARAMETER_PATH,
  JWT_AUTH_USER_INFO_ENDPOINT,
  JWT_AUTH_EMAIL_UNVERIFIED_REDIRECT_ENDPOINT,
  ASSETS_OVERRIDE_PATH,
  API_DOMAIN,
  API_CERTIFICATE_ARN,
  CORS_ALLOW_ANY_ORIGIN,
  CORS_ALLOW_ADDITIONAL_ORIGINS,
  CORS_ADDITIONAL_ORIGINS,
  CLOUDFRONT_DISTRIBUTION_ID,
  VPC_ID,
  WEB_APP_BUCKET_NAME,
  VPC_SUBNETS,
  WEB_APP_DOMAIN,
  WEB_APP_CERTIFICATE_ARN,
  WEB_APP_API_URL,
  WEB_APP_AUTH_URL,
  WEB_APP_AUTH_CLIENT_ID,
  WEB_APP_AUTH_LOGOUT_URL,
  WEB_APP_GOOGLE_ANALYTICS_TRACKING_ID,
  WEB_APP_SENTRY_DSN,
  WEB_APP_AUTH_TOKEN_ID_CLAIM,
  WEB_APP_CSP_CONNECT_SRC,
  WEB_APP_CSP_SCRIPT_SRC,
  WEB_APP_CSP_IMG_SRC,
  WEB_APP_CSP_FRAME_SRC,
  WEB_APP_FOOTER_LOGO,
  MONITORING_SENTRY_DSN,
  SNS_TOPIC_ARN_MONITORING_ALERTS,
} = process.env

export default {
  pipeline: {
    env: {
      account: AWS_ACCOUNT_ID,
      region: AWS_DEFAULT_REGION,
    },
    pipelineNotificationsSnsTopicArn: SNS_TOPIC_ARN_PIPELINE_NOTIFICATION,
    developStageConfiguration: {
      dataStoreStackProps: {
        name: DATASTORE_STACK_NAME,
        props: {
          env: {
            account: AWS_ACCOUNT_ID,
            region: AWS_DEFAULT_REGION,
          },
          vpcConfig: {
            natGatewaysCount: 1,
            maxAzs: 2,
          },
          rdsConfig: {
            backupRetentionDays: 7,
            maxCapacity: 2,
          },
          awsAccountEnv: {
            vpcId: VPC_ID,
            vpcSubnets: VPC_SUBNETS,
          },
        },
      },
      cityStacksProps: [
        {
          name: CITY_STACK_NAME,
          props: {
            env: {
              account: AWS_ACCOUNT_ID,
              region: AWS_DEFAULT_REGION,
            },
            dataStoreStackName: DATASTORE_STACK_NAME,
            jwtAuth: {
              integrationType: JWT_AUTH_INTEGRATION_TYPE,
              signingKeyParameterPath: JWT_AUTH_SIGNING_KEY_PARAMETER_PATH,
              userInfoEndpoint: JWT_AUTH_USER_INFO_ENDPOINT,
              emailUnverifiedRedirectEndpoint: JWT_AUTH_EMAIL_UNVERIFIED_REDIRECT_ENDPOINT,
            },
            cloudfront: {
              CLOUDFRONT_DISTRIBUTION_ID,
              VPC_ID,
              WEB_APP_BUCKET_NAME,
            },
            webAppBuildVariables: {
              API_URL: WEB_APP_API_URL,
              AUTH_URL: WEB_APP_AUTH_URL,
              AUTH_CLIENT_ID: WEB_APP_AUTH_CLIENT_ID,
              AUTH_LOGOUT_URL: WEB_APP_AUTH_LOGOUT_URL,
              GOOGLE_ANALYTICS_TRACKING_ID: WEB_APP_GOOGLE_ANALYTICS_TRACKING_ID,
              SENTRY_DSN: WEB_APP_SENTRY_DSN,
              AUTH_TOKEN_ID_CLAIM: WEB_APP_AUTH_TOKEN_ID_CLAIM,
              CSP_CONNECT_SRC: WEB_APP_CSP_CONNECT_SRC,
              CSP_SCRIPT_SRC: WEB_APP_CSP_SCRIPT_SRC,
              CSP_IMG_SRC: WEB_APP_CSP_IMG_SRC,
              CSP_FRAME_SRC: WEB_APP_CSP_FRAME_SRC,
              FOOTER_LOGO: WEB_APP_FOOTER_LOGO,
            },
            assetsOverridePath: ASSETS_OVERRIDE_PATH,
            apiDomainConfig: {
              certificateArn: API_CERTIFICATE_ARN,
              domain: API_DOMAIN,
              corsAllowAnyHost: CORS_ALLOW_ANY_ORIGIN?.toLowerCase() === 'true',
              corsAllowAdditionalOrigins: CORS_ALLOW_ADDITIONAL_ORIGINS?.toLowerCase() === 'true',
              corsAdditionalOrigins: CORS_ADDITIONAL_ORIGINS,
            },
            webAppDomainConfig: {
              certificateArn: WEB_APP_CERTIFICATE_ARN,
              domain: WEB_APP_DOMAIN,
            },
            emailSender: {
              address: EMAIL_SENDER_ADDRESS,
              name: EMAIL_SENDER_NAME,
            },
            agencyEmailDomainsWhitelist: AGENCY_EMAIL_DOMAIN_WHITELIST?.split(
              ',',
            ),
            monitoring: {
              sentryDsn: MONITORING_SENTRY_DSN,
              alertsSnsTopicArn: SNS_TOPIC_ARN_MONITORING_ALERTS,
            },
            awsAccountEnv: {
              vpcId: VPC_ID,
              vpcSubnets: VPC_SUBNETS,
            },
            sharedInboxConfig: {
              'myfile.sharedinbox@nycopportunity.nyc.gov': [
                'dsessoms@nycopportunity.nyc.gov',
                'dgolden@nycopportunity.nyc.gov',
                'wereid@nycopportunity.nyc.gov',
                'dgolden@oti.nyc.gov',
                'dsessoms@oti.nyc.gov',
              ]
            },
          },
        },
      ],
    },
  },
}
