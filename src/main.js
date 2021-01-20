import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Laue } from 'laue';
import VCalendar from 'v-calendar';
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
 
Vue.use(Donut);
Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});
Vue.use(Laue);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
