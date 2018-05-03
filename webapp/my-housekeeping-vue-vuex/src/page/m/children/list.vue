<template>
  <div>
    <x-header :back="back" title='m_list' bgColor="#333b45" strokeColor="#fff" />
    <h1>m_list</h1>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      back: '/order/add',
    };
  },
  created() {
    this.GET_USERROLE(this);
  },
  methods: {
    ...mapMutations(['GET_USERROLE']),
  },
};
</script>
