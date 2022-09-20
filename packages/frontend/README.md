# My File NYC Frontend

## Overview

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

More info about the deployment script and setup can be found in the [infra readme](./packages/infra/README.md).

## Config

The `.env` config file, used by webpack to build the nuxt app, is now generated automatically at build-time with the `build-dotenv.sh` bash script. This script is executed from the npm scripts and does not need to be called independently.

## Environment Setup with `params.env`

Throughout the My File project, you will notice the presence of a `params.env` file in the root of each package that has direct deployment capabilities: **infra** & **frontend**.

The `params.env` file is simply a "source-able" file used to setup the necessary environment variables for any deployment-related activity.

It is very easy to follow and straightforward to maintain and use.

**Overview of file:**

```
export DEPLOYMENT_TARGET=${DEPLOYMENT_TARGET:='dev'}
export AWS_PAGER=""
export AWS_DEFAULT_REGION=${AWS_DEFAULT_REGION:='us-east-1'}


if [ $DEPLOYMENT_TARGET = 'dev' ]; then

  ... dev variable definitions

elif [ $DEPLOYMENT_TARGET = 'staging' ]; then

  ... staging variable definitions

elif [ $DEPLOYMENT_TARGET = 'production' ]; then

  ... production variable definitions

fi

```

At the beginning of the file, there are a few variables defined with defaults, as well as an assignment of an "already defined" variable.

`DEPLOYMENT_TARGET`, for example, is used to determine which environment is being deployed. Upon sourcing the file, if the `DEPLOYMENT_TARGET` variable is defined and present in the environment, then the same value will be used.

However, if there is no presence of an existing .`DEPLOYMENT_TARGET` variable, then the default value of `dev` will be assigned.

Inside of each "Deployment Target" section of the file, the specific values are assigned for the target environment.

A key AWS CLI environment variable, `AWS_PROFILE` is set with a default value in each of the deployment target sections. This sets the "named profile" to be used from the `~/.aws/credentials` file. The default value can be used so that all members of the team use the same value for the named profile, like so:

**params.env**
```
... dev if/else block ...

export AWS_PROFILE=${AWS_PROFILE:='nyc_hhs04'}

...
```

**~/.aws/credentials**
```
...

[nyc_hhs03]
aws_access_key_id=ASI........3HAH
aws_secret_access_key=EWbXvpo/Xm.......9lQn0Ai5
aws_session_token=9lQn0Ai5......EWbXvpo/Xm

[nyc_hhs04]
aws_access_key_id=ASI........3HAH
aws_secret_access_key=EWbXvpo/Xm.......9lQn0Ai5
aws_session_token=9lQn0Ai5......EWbXvpo/Xm

...
```

Above, if the developer's AWS credentials file contains named profiles that are aligned with the default value in the `params.env` file, then the default value will match the developer's environment.

**A WORD OF CAUTION:**

If you run deployments for multiple deployment targets (i.e. dev, staging, etc) while in the same terminal session, the previously set `$DEPLOYMENT_TARGET`, `$AWS_PROFILE`, etc variables will exist, and be re-used.

As good practice, when running the `npm` script for a given deployment, use "in line" environment variables to ensure the right context:

>`DEPLOYMENT_TARGET=staging AWS_PROFILE=nyc_hhs04 yarn infra cdk-deploy`

## `params.env` Enhancements & Next Steps

The `params.env` file is an enhancement to the previously-used, `.env` files that had only hard-coded values. While many of the previously-defined static values were ported over, some variables were added that pull from cloud-defined parameters (SSM Parameters).

This enables the application to be setup without the need for developers having to copy and maintain static files locally. It also makes advancements to move any secret values outside the potential for being versioned or inadvertently misused.

Further enhancements and hardening should include the use of AWS Secrets in addition to SSM Parameters to ensure properly-encrypted sensitive environment details.

## NPM Scripts

From the root of the repository, use `yarn fe <script>`.
Otherwise, if already in the `packages/frontend` directory, you can call the scripts directly with `yarn <script>`.

**Some Helpful Scripts:**

```
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn local-dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

```

**Deployment Scripts:**

- `yarn local-dev` - preset the DEPLOYMENT_TARGET to dev, source the `params.env` file, generate the `.env` file, build and run the app locally at localhost:3000
- `yarn local-staging` - same as local-dev but using the staging api and context
- `yarn local-prod` - same as local-dev but using the prod api and context
- `yarn deploy-dev` - preset the DEPLOYMENT_TARGET to dev, source the `params.env` file, generate the `.env` file, build and deploy the app to the dev environment. (Please set the AWS_PROFILE as an inline variable to ensure proper AWS account deployment)
- `yarn deploy-staging` - same as deploy-dev but using the staging settings and context
- `yarn deploy-prod` - same as deploy-dev but using the prod settings and context

## Frontend Stack

Workspace name: frontend

- Programming language: TypeScript
- Package manager: Yarn
- UI framework: Vue.js 2
- Component library: Vuetify.js
- Nuxt.js modules: Axios, Progressive Web App (PWA)
- Linting tools: ESLint, Prettier, eslint-config-prettier
- Accessibility: eslint-plugin-vue-a11y lints static code; Vue Axe analyzes rendered components in the browser via the
  developer console.
- Testing frameworks: Jest, Storybook, (In future we will also use BrowserStack)
- Rendering mode: Single Page App
- Deployment target: Static
- CSS Preprocessing: node-sass, sass-loader, @nuxtjs/style-resources
- Vue modules: vue-class-component, nuxt-property-decorator, vuex-module-decorators

## Accessibility

ESLint includes an accessibility check of all Vue components. Futher accessibility

## Static assets

Assets under `./static` are for local development purposes only. At build time the CI/CD pipeline will pull the static assets from an S3 bucket specific to the deployment environment.

## Debugging Auth



## Local Development with Google Analytics

You need to set your tracking ID in your [.env](./.env) file:

```
GOOGLE_ANALYTICS_TRACKING_ID=UA-00000000-1
```

And you need to add the following in [nuxt.config.js](./nuxt.config.js):

```
googleAnalytics: {
  dev: true,
  debug: {
    enabled: true,
    sendHitTask: true,
  },
}
```

## Testing on mobile

in your [.env](./.env) file, set `MOBILE_TESTING=1`

Then you can run your development server, look at the IP it is running on and add that IP to the development environment cognito config. This is required for the login flow to work correctly. See the third entry in cognito console below for example:

![IP address in cognito app client settings](./docs/mobile_development.png 'How to add local IP to cognito')

## Internationalisation

See following docs:

- [Nuxt i18n module](https://i18n.nuxtjs.org/)
- [Vue i18n framework](https://kazupon.github.io/vue-i18n/introduction.html)

To add translations for another language, follow these steps:

1. Update [messages.ts](./assets/js/messages.ts) by copying the `en` block, changing the locale to the appropriate ISO 639-2 code for the language you want to add translations for, and adding appropriate translations for all items. You will also need to import the appropriate vuetify and vee-validate translations. A guide on using `messages.ts` can be found in the [Vue i18n docs](https://kazupon.github.io/vue-i18n/started.html#html).
2. Add the ISO 639-2 code to [nuxt.config.js](./nuxt.config.js) in the list under `i18n > locales`
3. For each folder in the [content](./content) directory, add a file named with the new ISO 639-2 code, eg. `jp.ts` which will contain the markdown content for that page. You may use the english versions as a reference, although any markdown is acceptable.

> Note: A language picker will be available when navigating to `/account` as long as more than one translation has been provided. The chosen language will be preserved for the duration of the browser session, with english being the default.
