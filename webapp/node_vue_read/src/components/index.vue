<template>
  <div>
    <div>{{count}}</div>
    <div>
      <!-- <aVue/> -->
    </div>
    <div>
      <input type="text" v-model="num">
    </div>
    <div>
      <!-- <button @click="add(num)">+</button> -->
       <!--<button @click="reduce(num)">-</button> -->
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </div>
  </div>
</template>

<script>
import { store, mapState, mapMutations, mapActions } from "vuex";
import aVue from "./a";
export default {
  name: "home",
  data() {
    return {
      num: 10
    };
  },
  created() {},
  computed: {
    ...mapState(["count"]),
    count() {
      return this.$store.getters.count;
    }
  },
  components: {
    aVue
  },
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction", "reduceAction"])
  }
};
</script>

<style>
button {
  padding: 15px;
}
</style>
