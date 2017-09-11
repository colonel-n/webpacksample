import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
import store from './store'
import AppView from './components/App.vue'

var router = new VueRouter({
    routes: routes,
    mode: 'history'
})

new Vue({
    el: '#root',
    store,
    router,
    render: h => h(AppView)
});

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';