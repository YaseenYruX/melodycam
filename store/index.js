export const state = () => ({
  bodyClass: 'light-theme'
})

export const mutations = {
  openLight(state) {
    state.bodyClass='light-theme'
  },
  offLight(state) {
    state.bodyClass='dark-theme'
  }
}