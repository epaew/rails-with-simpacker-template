import Vue from 'vue';

import Greeting from '../../components/home/greeting.vue';

window.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#greeting',
    components: { Greeting },
  });
});
