<template>
  <div>
    <div>
      <button @click="add(num)">+</button>
      <button @click="reduce(num)">-</button>
      <!-- <button @click="addAction">+</button> -->
      <!-- <button @click="reduceAction">-</button> -->
    </div>
  </div>
</template>

<script>
import { store, mapState, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {
      num: 1,
    };
  },
  created() {},
  computed: {
    ...mapState({
      count: state => state.user.count,
    }),
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction']),
  },
};
</script>

<style>
button {
  padding: 15px;
}
</style>
