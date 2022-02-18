export default {
  "pipeline": {
    "env": {
      "account": "010393621324",
      "region": "us-east-1"
    },
    "pipelineNotificationsSnsTopicArn": "arn:aws:sns:us-east-1:010393621324:twobulls-slack-topic",
    "developStageConfiguration": {
      "dataStoreStackProps": {
        "name": "NonProdDataStore",
        "props": {
          "env": {
            "account": "010393621324",
            "region": "us-east-1"
          },
          "vpcConfig": {
            "natGatewaysCount": 1,
            "maxAzs": 2
          },
          "rdsConfig": {
            "backupRetentionDays": 7,
            "maxCapacity": 2
          }
        }
      },
      "cityStacksProps": [
        {
          "name": "NycStaging",
          "props": {
            "env": {
              "account": "010393621324",
              "region": "us-east-1"
            },
            "dataStoreStackName": "NonProdDataStore",
            "jwtAuth": {
              "integrationType": "NYCID_OAUTH",
              "signingKeyParameterPath": "/nycId/signingKey",
              "userInfoEndpoint": "https://accounts-nonprd.nyc.gov/account/api/oauth/user.htm?userName=data-locker",
              "emailUnverifiedRedirectEndpoint": "https://accounts-nonprd.nyc.gov/account/validateEmail.htm"
            },
            "webAppBuildVariables": {
              "API_URL": "https://4dzmcdsnml.execute-api.us-east-1.amazonaws.com",
              "AUTH_URL": "https://accounts-nonprd.nyc.gov/account/api/oauth/authorize.htm",
              "AUTH_CLIENT_ID": "data-locker",
              "AUTH_LOGOUT_URL": "https://accounts-nonprd.nyc.gov/account/idpLogout.htm?x-frames-allow-from=https%3A%2F%2Fd3gtg3qw3q3xz9.cloudfront.net",
              "GOOGLE_ANALYTICS_TRACKING_ID": "UA-182942417-2",
              "SENTRY_DSN": "https://50eb97183e8f4cb8880bfecbb1479354@o880553.ingest.sentry.io/5834299",
              "AUTH_TOKEN_ID_CLAIM": "GUID",
              "CSP_CONNECT_SRC": "https://s3.us-east-1.amazonaws.com,https://nycstaging-documentsbucket9ec9deb9-1p3yvyeegriek.s3.us-east-1.amazonaws.com,https://*.sentry-cdn.com,https://*.sentry.io,https://browser.sentry-cdn.com,https://www.google-analytics.com",
              "CSP_SCRIPT_SRC": "https://*.sentry-cdn.com,https://*.sentry.io,https://browser.sentry-cdn.com,https://www.google-analytics.com",
              "CSP_IMG_SRC": "https://nycstaging-documentsbucket9ec9deb9-1p3yvyeegriek.s3.us-east-1.amazonaws.com,https://www.google-analytics.com",
              "CSP_FRAME_SRC": "https://nycstaging-documentsbucket9ec9deb9-1p3yvyeegriek.s3.us-east-1.amazonaws.com",
              "FOOTER_LOGO": "0"
            },
            "assetsOverridePath": "nyc",
            "apiDomainConfig": {
              "certificateArn": "arn:aws:acm:us-east-1:010393621324:certificate/ba3a7034-04bb-40b9-8a25-4780df3d2075",
              "domain": "myfile-api-stg.cityofnewyork.us",
              "corsAllowAnyHost": true
            },
            "webAppDomainConfig": {
              "certificateArn": "arn:aws:acm:us-east-1:010393621324:certificate/ebf7837f-0b7f-4227-800e-1fb6da7d065b",
              "domain": "myfile-stg.cityofnewyork.us"
            },
            "emailSender": {
              "address": "myfile-noreply@nycopportunity.nyc.gov",
              "name": "Datalocker"
            },
            "agencyEmailDomainsWhitelist": [
              "@nycopportunity.nyc.gov",
              "@dss.nyc.gov",
              "@dhs.nyc.gov",
              "@hra.nyc.gov",
              "@doitt.nyc.gov"
            ],
            "monitoring": {
              "sentryDsn": "https://50eb97183e8f4cb8880bfecbb1479354@o880553.ingest.sentry.io/5834299",
              "alertsSnsTopicArn": "arn:aws:sns:us-east-1:010393621324:NonProdAlerts"
            }
          }
        }
      ]
    }
  },
  "context": {
    "availability-zones:account=950483335150:region=us-east-1": [
      "us-east-1a",
      "us-east-1b",
      "us-east-1c",
      "us-east-1d",
      "us-east-1e",
      "us-east-1f"
    ],
    "vpc-provider:account=010393621324:filter.vpc-id=vpc-01b009799423f8eea:region=us-east-1:returnAsymmetricSubnets=true": {
      "vpcId": "vpc-01b009799423f8eea",
      "vpcCidrBlock": "10.138.125.0/24",
      "availabilityZones": [],
      "vpnGatewayId": "vgw-046977544b9eb44a5",
      "subnetGroups": [
        {
          "name": "Private",
          "type": "Private",
          "subnets": [
            {
              "subnetId": "subnet-0530569cac77e9ee2",
              "cidr": "10.138.125.0/25",
              "availabilityZone": "us-east-1a",
              "routeTableId": "rtb-0796473404855a0ac"
            },
            {
              "subnetId": "subnet-040074ac5e7f46642",
              "cidr": "10.138.125.128/25",
              "availabilityZone": "us-east-1b",
              "routeTableId": "rtb-0796473404855a0ac"
            }
          ]
        }
      ]
    }
  }
}