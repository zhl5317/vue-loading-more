import VueLoadingMore from './VueLoadingMore.vue'

const install = (vue) => {
  if (install.installed) return
  vue.component('VueLoadingMore', VueLoadingMore)
}

export default install

export const components = {
  VueLoadingMore,
}
