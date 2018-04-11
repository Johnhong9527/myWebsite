<template>
  <div>
    <!-- <h1> order</h1> -->
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'order',
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['GET_USERROLE']),
  },
  created() {
    console.log(123)
    this.GET_USERROLE(this);
  },
};
</script>
