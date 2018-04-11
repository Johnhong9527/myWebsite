<template>
  <div>
    <h1>h_info</h1>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {};
  },
  created() {
    this.GET_USERROLE(this);
  },
  methods: {
    ...mapMutations(['GET_USERROLE']),
  },
};
</script>
