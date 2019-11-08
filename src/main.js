import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'
import { routes } from "./routes.js"
import Vue from "vue"
// import ApexCharts from 'apexcharts'

// Vue.use(ApexCharts)


Vue.use(BootstrapVue);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
