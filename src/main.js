import Vue from 'vue'
import App from './App.vue'
import VueMqtt from 'vue-mqtt';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
Vue.use(VueMqtt, 'ws://autbackup:9001/',
    {
        clientId: 'WebClient-' + parseInt(Math.random() * 100000),
        keepalive: 300,
        // protocolId: 'mqtt'
    },

);
Vue.config.productionTip = false


new Vue({
    vuetify: new Vuetify(),

    render: h => h(App),
}).$mount('#app')
