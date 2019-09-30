import Vue from 'vue';

Vue.filter('strFormat', (value) => {
    console.log('strFormat');
    console.log('length', value.length);
    return value;
});
