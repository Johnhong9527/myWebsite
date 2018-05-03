<template>
  <div>
    <div>
      <div>
        <img :src="info.avatar" alt="">
      </div>
      <aVue/>
      <!-- <bVue/> -->
    </div>
  </div>
</template>

<script>
// import { store, mapState, mapMutations, mapActions } from 'vuex'
import aVue from './a';
import bVue from './b';
// import config from '@/config/config'
let config = require('@/config/config');
export default {
  name: 'home',
  data() {
    return {
      info: {},
    };
  },
  created() {
    // console.log(config.apiPath());
    this.$store.commit('GET_USERINFO');
  },
  methods: {},
  components: {
    aVue,
    bVue,
  },
};
</script>

<style scoped lang='less'>
button {
  padding: 15px;
  cursor: pointer;
  user-select: none;
}
img {
  display: block;
  width: 100%;
  border-radius: 50%;
  &::before {
    content: '';
    display: block;
  }
}
</style>
