import Vue from 'vue';

Vue.filter('strFormat', (value, length) => {
    // console.log('length', length);
    if(value.length > length) {
        value = value.substring(0, length);
        value = value + '...';
    }
    return value;
});
