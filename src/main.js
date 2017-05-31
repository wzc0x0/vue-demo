import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
//import '../static/css/theme-green/index.css';

Vue.use(VueResource);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
