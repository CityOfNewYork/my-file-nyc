#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const content = `
# This is an example .env file with "sensible dev defaults” but no sensitive info, this can be committed.
# For local development, please use this as a template to create your /packages/frontend/.env

# Base url for requests to the Data Locker API
API_URL=${process.env.API_URL}

# OAuth2 Authorize URL
AUTH_URL=${process.env.AUTH_URL}

# Logout URL - called after user presses logout to clear session in identity provider
AUTH_LOGOUT_URL=${process.env.AUTH_LOGOUT_URL}

# Logout URL - called after user presses logout to clear session in identity provider
AUTH_REGISTRATION_URL=${process.env.AUTH_REGISTRATION_URL}

# OAuth2 scopes to request. Do not include this variable for NYC.ID integration
# AUTH_SCOPES=openid,profile,email
AUTH_SCOPES=${process.env.AUTH_SCOPES}

# OAuth2 Client ID
AUTH_CLIENT_ID=${process.env.AUTH_CLIENT_ID}

# OAuth2 name of the claim that indicates the users ID. For NYC.ID integration, this is GUID
AUTH_TOKEN_ID_CLAIM=${process.env.AUTH_TOKEN_ID_CLAIM}

# Google Analytics Tracking ID. Will disable tracking if this variable is not included
GOOGLE_ANALYTICS_ID=${process.env.GOOGLE_ANALYTICS_ID}
# GOOGLE_ANALYTICS_TRACKING_ID=${process.env.GOOGLE_ANALYTICS_TRACKING_ID}

# if true (1), will show the build number and time at the bottom of the nav bar
SHOW_BUILD_INFO=${process.env.SHOW_BUILD_INFO}

# if true (1), will serve on your computer's local network IP address and
# include mock certificates to placate browser
MOBILE_TESTING=${process.env.MOBILE_TESTING}

# Used for sentry reporting. Will disable reporting if SENTRY_DSN is not included
DEPLOYMENT_TARGET=${process.env.DEPLOYMENT_TARGET}
BUILD_ENVIRONMENT=${process.env.BUILD_ENVIRONMENT}
SENTRY_DSN=${process.env.SENTRY_DSN}

# Agency Email Whitelist. Only emails matching the prefix of one of these values (comma separated) are allowed to be shared to.
AGENCY_EMAIL_DOMAINS_WHITELIST=${process.env.AGENCY_EMAIL_DOMAINS_WHITELIST}

# DHS email
AGENCY_EMAIL=${process.env.AGENCY_EMAIL}

# Content Security Policy source values
# CSP_CONNECT_SRC=https://s3.us-east-1.amazonaws.com,https://nycstaging-documentsbucket9ec9deb9-1p3yvyeegriek.s3.us-east-1.amazonaws.com,https://*.sentry-cdn.com,https://*.sentry.io,https://browser.sentry-cdn.com,https://www.google-analytics.com
# CSP_SCRIPT_SRC=https://*.sentry-cdn.com,https://*.sentry.io,https://browser.sentry-cdn.com,https://www.google-analytics.com
# CSP_IMG_SRC=https://nycstaging-documentsbucket9ec9deb9-1p3yvyeegriek.s3.us-east-1.amazonaws.com,https://www.google-analytics.com
# CSP_FRAME_SRC=https://nycstaging-documentsbucket9ec9deb9-1p3yvyeegriek.s3.us-east-1.amazonaws.com
CSP_CONNECT_SRC=${process.env.CSP_CONNECT_SRC}
CSP_SCRIPT_SRC=${process.env.CSP_SCRIPT_SRC}
CSP_IMG_SRC=${process.env.CSP_IMG_SRC}
CSP_FRAME_SRC=${process.env.CSP_FRAME_SRC}

# Landing page Footer logo toggle: 1 (true) or 0 (false)
FOOTER_LOGO=${process.env.FOOTER_LOGO}

# Adobe credentials
ADOBE_CLIENT_ID_LOCAL=${process.env.ADOBE_CLIENT_ID_LOCAL}
ADOBE_CLIENT_ID=${process.env.ADOBE_CLIENT_ID}

`;

fs.writeFileSync(path.join(process.cwd(), '.env'), content);