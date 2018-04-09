<template>
  <div>
    <!-- <div class="count">{{count}}</div> -->
    <h3 @click='showInfo'>123</h3>
    <div>
    </div>
  </div>
</template>

<script>
import { store, mapState, mapMutations, mapActions } from 'vuex';
import axios from 'axios';
import qs from 'qs';
export default {
  data() {
    return {
      num: 10,
    };
  },
  created() {
    console.log(this.user_info);
  },
  methods: {
    showInfo() {
      console.log(this.user_info);
    },
  },
  computed: {
    ...mapState({
      user_info: state => state.user.info,
    }),
  },
};
</script>

<style scoped>
.count {
  user-select: none;
}
</style>
