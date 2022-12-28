import modal from "./modal"
import tab from "./tab"
export default {
    install(Vue) {
        Vue.prototype.$modal = modal
        Vue.prototype.$tab = tab
    }
}
