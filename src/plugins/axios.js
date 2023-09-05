import Vue from 'vue'
import axios from 'axios'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL:  'https://curso-vue-50484-default-rtdb.firebaseio.com/',
      headers: {
        'Authorization': 'abc123'
      }
    })
  }

})
