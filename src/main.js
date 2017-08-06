import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VUeRouter from 'vue-router';

Vue.use(VueResource);
Vue.use(VUeRouter);

new Vue({
  el: '#app',
  render: h => h(App),
})
