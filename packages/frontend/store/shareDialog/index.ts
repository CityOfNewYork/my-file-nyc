import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'shareDialog',
  stateFactory: true,
  namespaced: true,
})
export default class ShareDialog extends VuexModule {
  visible = false

  get isVisible() {
    return this.visible
  }
  //   @Action
  //   async setParams(payload: SnackParams) {
  //     await this.context.commit('_setParams', payload)
  //     await this.context.commit('_setTimeout', 0)
  //     if (
  //       this._params.timeoutMilliseconds &&
  //       this._params.timeoutMilliseconds > 0
  //     ) {
  //       await this.context.commit(
  //         '_setTimeout',
  //         window.setTimeout(() => {
  //           this.context.commit('setVisible', false)
  //         }, this._params.timeoutMilliseconds),
  //       )
  //     }
  //   }

  @Mutation
  setVisible(payload: boolean) {
    this.visible = payload
  }
}
