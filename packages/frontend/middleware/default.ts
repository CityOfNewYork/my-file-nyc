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
  switch (route.path) {
    case app.localePath('/client'):
      userStore.setRole(UserRole.CLIENT)
      break
    case app.localePath('/agency'):
      userStore.setRole(UserRole.AGENT)
      break
    case app.localePath('/community'):
      userStore.setRole(UserRole.CBO)
      break
    default:
      await userStore.fetchRole()
  }

  if (store.state.auth.loggedIn) {
    const promises: Promise<any>[] = []
    if (!userStore.userId) {
      console.log('--- 1 ---')
      const claims = decode($auth.getToken($config.authStrategy))
      await userStore.setUserId(claims[$config.authTokenIdClaim])
    }
    if (!userStore.profile) {
      console.log('--- 2 ---')
      promises.push(userStore.fetchProfile())
    }
    await Promise.all(promises)
    if (
      !userStore.profile!.termsOfUseAccepted &&
      !['/terms-of-use', '/logout']
        .map((r) => app.localePath(r))
        .includes(route.path)
    ) {
      console.log('--- 3 ---')
      redirect(app.localePath('/terms-of-use'))
    }

    if (
      ['/client', '/agency', '/community', '/']
        .map((r) => app.localePath(r))
        .includes(route.path)
    ) {
      console.log('--- 4 ---')
      redirect(app.localePath('/dashboard'))
    }
  }
}
