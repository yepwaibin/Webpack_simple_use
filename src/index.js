import { sum } from '@/js/math.js';
const { priceFormat} = require('./js/format.js');
import { createApp } from 'vue';
import axios from 'axios'
import App from './vue/App.vue';

import "./js/element";

if (module.hot) {
  module.hot.accept("./js/element", () => {
    console.log("element更新了");
  })
}

console.log(sum(20, 30));
console.log(priceFormat());


const a = '123';
const name = ['23','34'];

name.forEach(item => console.log(item))

const app = createApp(App);
app.mount("#app");


console.log("kk");

axios.get("")