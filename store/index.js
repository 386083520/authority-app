import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import gettters from './gettters'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        user
    },
    gettters
})
export default store
