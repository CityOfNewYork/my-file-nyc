import CspHtmlWebpackPlugin from 'csp-html-webpack-plugin'
import cheerio from 'cheerio'
import { CspEnum } from './types/environment'
import messages from './assets/js/messages.ts'
import { envConfig } from './plugins/env-config.ts'
import { getSrc } from './assets/js/csp.ts'

const config = {
  /**
   * Server Side Rendering: https://nuxtjs.org/docs/configuration-glossary/configuration-ssr#the-ssr-property
   */
  ssr: false,

  /**
   * Deployment target: https://nuxtjs.org/docs/configuration-glossary/configuration-target#the-target-property
   */
  target: 'static',

  /**
   * Global page headers: https://go.nuxtjs.dev/config-head
   */
  head: {
    title: 'Loading...',
    titleTemplate: '%s | My File NYC',
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.META || '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  /**
   * Global CSS: https://go.nuxtjs.dev/config-css
   */
  css: ['@/assets/scss/main.scss'],

  /**
   * StyleResources: @nuxtjs/style-resources https://github.com/nuxt-community/style-resources-module
   */
  styleResources: {
    scss: [
      '@/assets/scss/_colors.scss',
      '@/assets/scss/_variables.scss',
      '@/assets/scss/_helpers.scss',
    ],
  },

  /**
   * Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
   */
  plugins: [
    '@/plugins/vee-validate.js',
    // TODO: consider re-enabling when https://github.com/vue-a11y/vue-axe/issues/32 is resolved
    // {
    //   src: '@/plugins/axe.ts',
    //   mode: 'client',
    // },
  ],

  /**
   * Auto import components: https://go.nuxtjs.dev/config-components
   */
  components: true,

  /**
   * Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
   */
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  /**
   * Modules: https://go.nuxtjs.dev/config-modules
   */
  modules: [
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org
    '@nuxtjs/auth',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org
    'nuxt-i18n',
    // https://sentry.nuxtjs.org
    '@nuxtjs/sentry',
  ],

  /**
   * PWA module configuration: https://go.nuxtjs.dev/pwa
   */
  pwa: {
    // TODO: other PWA features like icon and colour scheme
    manifest: {
      name: 'My File NYC',
      short_name: 'My File NYC',
      useWebmanifestExtension: true,
      display: 'fullscreen',
    },
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
  },

  /**
   * i18n module configuration: https://i18n.nuxtjs.org
   */
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages,
    },
    strategy: 'no_prefix',
  },

  /**
   * Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
   */
  vuetify: {
    treeShake: true,
    defaultAssets: false,
    customVariables: ['@/assets/scss/_vuetifyVariables.scss'],
    optionsPath: './vuetify.options.ts',
  },

  /**
   * Value of this object is accessible from both client and server using $config: https://nuxtjs.org/docs/configuration-glossary/configuration-runtime-config#publicruntimeconfig
   */
  publicRuntimeConfig: envConfig,

  /**
   * Build Configuration: https://go.nuxtjs.dev/config-build
   */
  build: {
    transpile: ['vee-validate/dist/rules'],
    extractCSS: {
      ignoreOrder: true,
      filename: '[contenthash].css',
      chunkFilename: '[contenthash].css',
    },
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'inline-source-map' // prevents eval() execution - see: https://github.com/webpack/webpack/issues/5627#issuecomment-374386048
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'raw-loader',
        options: {},
      })
    },
    plugins: [
      new CspHtmlWebpackPlugin(
        {
          'default-src': ["'self'"],
          'base-uri': ["'self'"],
          'img-src': getSrc(CspEnum.IMAGE, process.env.CSP_IMG_SRC),
          'worker-src': ["'self'"],
          'style-src': ["'self'"],
          'script-src': getSrc(CspEnum.SCRIPT, process.env.CSP_SCRIPT_SRC),
          'connect-src': getSrc(CspEnum.CONNECT, process.env.CSP_CONNECT_SRC),
          'frame-src': getSrc(CspEnum.FRAME, process.env.CSP_FRAME_SRC),
          'form-action': ["'self'"],
          'object-src': ["'none'"],
        },
        {
          enabled: true,
          hashingMethod: 'sha256',
          hashEnabled: {
            'script-src': false,
            'style-src': false,
          },
          nonceEnabled: {
            'script-src': true,
            'style-src': true,
          },
          processFn: (builtPolicy, htmlPluginData, $) => {
            // this function was adapted from https://github.com/slackhq/csp-html-webpack-plugin/blob/master/plugin.js
            // to prepend charset since charset must be in first 1024 bytes on firefox
            let metaTag = $('meta[http-equiv="Content-Security-Policy"]')
            // Add element if it doesn't exist.
            if (!metaTag.length) {
              metaTag = cheerio.load(
                '<meta http-equiv="Content-Security-Policy">',
              )('meta')
              metaTag.prependTo($('head'))
            }
            // build the policy into the context attr of the csp meta tag
            metaTag.attr('content', builtPolicy)
            const charset = cheerio.load('<meta charset="utf-8">')('meta')
            charset.prependTo($('head'))
            // eslint-disable-next-line no-param-reassign
            htmlPluginData.html = $.html()
          },
        },
      ),
    ],
    // devtools: true,
  },
  generate: {
    dir: 'dist/' + process.env.OUTPUT_DIR,
  },

  /*
   ** Enforce auth for all routes
   ** Can be disabled by adding property `auth: false` to your page component
   */
  router: {
    middleware: ['auth', 'default'],
    extendRoutes(routes, resolve) {
      if (process.env.NODE_ENV === 'development') {
        routes.push({
          name: 'debug',
          path: '/debug',
          component: resolve(__dirname, 'components/DebugMenu/DebugMenu.vue'),
        })
      }
    },
  },

  /*
   ** Auth Config: https://github.com/nuxt-community/auth-module/blob/v4.9.1/docs/schemes/oauth2.md#usage
   */
  auth: {
    strategies: {
      oauth2: {
        _scheme: 'oauth2',
        audience: process.env.API_URL,
        codeChallengeMethod: 'S256',
        authorization_endpoint: process.env.AUTH_URL,
        userinfo_endpoint: false,
        scope: (process.env.AUTH_SCOPES || '').split(','),
        client_id: process.env.AUTH_CLIENT_ID,
        token_type: 'Bearer',
        token_key: 'access_token',
        response_type: 'token',
      },
      local: false,
    },
    redirect: {
      callback: '/authorize',
      logout: process.env.AUTH_LOGOUT_URL,
    },
    plugins: [
      '@plugins/store-accessor.ts',
      '@/plugins/api-accessor.ts',
      '@/plugins/env-config.ts',
      '@/plugins/showdown.ts',
    ],
  },
}

if (process.env.MOBILE_TESTING === '1') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require('fs')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const path = require('path')
  Object.assign(config, {
    server: {
      port: 3000,
      host: 'localhost',
      timing: false,
      https: {
        key: fs.readFileSync(path.resolve(__dirname, 'local/localhost.key')),
        cert: fs.readFileSync(path.resolve(__dirname, 'local/localhost.crt')),
      },
    },
  })
}

if (process.env.GOOGLE_ANALYTICS_TRACKING_ID) {
  Object.assign(config, {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    },
  })
}

if (process.env.SENTRY_DSN) {
  Object.assign(config, {
    sentry: {
      dsn: process.env.SENTRY_DSN,
      config: {
        environment: process.env.BUILD_ENVIRONMENT,
      },
    },
  })
}

export default config
