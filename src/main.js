import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify';
import LoadScript from 'vue-plugin-load-script';
import VueHtmlToPaper from 'vue-html-to-paper';

Vue.config.productionTip = false
const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://unpkg.com/nprogress@0.2.0/nprogress.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    './public/style.css'
  ]
}

Vue.use(VueHtmlToPaper, options);
Vue.use(LoadScript);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')