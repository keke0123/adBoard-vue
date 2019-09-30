import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// bootstrap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
// bootstrap

// moment
import moment from 'moment';
import VueMomentJs from 'vue-momentjs';
Vue.use(VueMomentJs, moment);
// moment

// filter
import './filters/custom';
// filter

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
