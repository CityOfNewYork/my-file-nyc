import { Context } from '@nuxt/types'
import { userStore } from '@/plugins/store-accessor'
import decode from 'jwt-claims'
import { UserRole } from '@/types/user'

/**
 * Check user role + logged in status and perform appropriate redirect
 * @param store
 * @param route
 * @param redirect
 * @param $auth
 */
export default async ({
  store,
  route,
  redirect,
  $auth,
  app,
  $config,
}: Context) => {
  if (store.state.auth.loggedIn) {
    const promises: Promise<any>[] = []

    const claims = decode($auth.getToken($config.authStrategy))
    const { mail } = claims
    const emailDomainWhitelist = $config.agencyEmailDomainsWhitelist.split(
      ',',
    ) as [string]
    const [mailUser, mailDomain] = mail.split('@')
    console.log(`whitelist: ${emailDomainWhitelist.join(',')}`)
    console.log(`mail domain: ${mailDomain}`)
    if (
      emailDomainWhitelist.some((d) =>
        d.toLowerCase().endsWith(mailDomain.toLowerCase()),
      )
    ) {
      userStore.setRole(UserRole.AGENT)
    } else {
      userStore.setRole(UserRole.CLIENT)
    }
    if (!userStore.userId) {
      await userStore.setUserId(claims[$config.authTokenIdClaim])
    }
    if (!userStore.profile) {
      promises.push(userStore.fetchProfile())
    }
    await Promise.all(promises)
    if (
      !userStore.profile!.termsOfUseAccepted &&
      !['/terms-of-use', '/logout']
        .map((r) => app.localePath(r))
        .includes(route.path)
    ) {
      redirect(app.localePath('/terms-of-use'))
    }

    if (
      ['/client', '/agency', '/community', '/']
        .map((r) => app.localePath(r))
        .includes(route.path)
    ) {
      redirect(app.localePath('/dashboard'))
    }
  }
}
