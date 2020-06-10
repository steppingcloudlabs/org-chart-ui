import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify';
import LoadScript from 'vue-plugin-load-script';
import VueHtmlToPaper from 'vue-html-to-paper';


Vue.config.productionTip = false
const options = {
  "name": "_blank",
  "specs": [
    "fullscreen=yes",
    "titlebar=yes",
    "scrollbars=yes"
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    './landscape.css',
    "./style.css"],
  

}

Vue.use(VueHtmlToPaper, options);
Vue.use(LoadScript);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')