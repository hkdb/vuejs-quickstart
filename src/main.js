import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Buefy from 'buefy';

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

Vue.config.productionTip = false

// import store from "./store";
new Vue({
	el: "#app",
	router,
 	render: h => h(App)
}).$mount('#app')
