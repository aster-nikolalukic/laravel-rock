
/**
 * @description Main frontend instance file.
 * Imports
 */
import Vue from "vue";
require('./bootstrap');
window.Vue = require('vue');
import myHeader from "../components/header.vue";


/**
 * @description Vue component staff
 * Register Component
 */
Vue.component(
  'header-component',
  myHeader
);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from "axios";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token: HTMLMetaElement | null = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}



export default class Application extends Vue {

  private version: string = '0.0.1'

  constructor() {
    super()
    console.info('contructiong main Application class instance ....')
  }

  private created() {
    console.info('contructiong main Application class instance constructed.')
  }

}

const app = new Vue({
  el: '#app',
  components: {
    myHeader
  },
  render: h => h(Application)
});

