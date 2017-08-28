import Vue from 'vue';
import appOptions from './javascripts/app.vue';
var app = new Vue(appOptions).$mount('#app')
import app2Options from './javascripts/app2.vue';
var app2 = new Vue(app2Options).$mount('#app2');
require('bootstrap/dist/css/bootstrap.css');

import Friend from './javascripts/friend';

var friend = new Friend('Goodness');
friend.callName();