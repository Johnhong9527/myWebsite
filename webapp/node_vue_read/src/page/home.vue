<template>
  <div>
    <title>搜索</title>
    <div class="progress">
      <div class="before" :style="{width:width+'%'}"></div>
    </div>
    <input type="text" v-model="width">
    <h1>{{width}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: 0,
    };
  },
  watch: {
    width: function(val, oldVal) {
      console.log(val);
      if (val == '') {
        this.width = val = 0;
      }
      if (val > 100) {
        this.width = val = oldVal;
      }
      this.width = Number.parseInt(val);
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>

</style>
