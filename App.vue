<script>
    import { getToken } from "./utils/auth";

    export default {
		onLaunch: function() {
			console.log('App Launch')
            this.initApp()
		},
        methods: {
		    initApp() {
		        this.checkLogin()
            },
            checkLogin() {
		        if(!getToken()) {
		            this.$tab.reLaunch('pages/login')
                }
            }
        }
	}
</script>

<style lang="scss">
	/*每个页面公共css */
    @import "@/static/scss/index.scss";
</style>
