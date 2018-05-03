<template>
  <div class="page" :style="{'background-color':bgColor}">
    <div class="svg" @click="bak">
      <svg xmlns="http://www.w3.org/2000/svg" :width=line_size :height=line_height>
        <line x1="0" :y1=line_height/2 :x2=line_size y2="0" :stroke=strokeColor :stroke-width=stroke_width></line>
        <line x1="0" :y1=line_height/2 :x2=line_size :y2=line_height :stroke=strokeColor :stroke-width=stroke_width></line>
      </svg>
    </div>
    <div class="title" :style="{'color':strokeColor}">{{title}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stroke: 'rgb(216, 55, 55)',
      stroke_width: 2,
      line_size: 15,
      line_height: 20,
    };
  },
  created() {
    // this.stroke = 'rgb(255,255,255)'
  },
  props: ['title', 'bgColor', 'strokeColor', 'back'],
  methods: {
    // 返回
    bak() {
      let path = this.$router.currentRoute.path;
      if (/\/m\/list/.test(path) || /\/h\/info/.test(path)) {
        return;
      }
      console.log(/\/m/g.test(path));
      if (this.back !== undefined) {
        this.$router.push({
          path: this.back,
        });
      } else {
        this.$router ? this.$router.back() : window.history.back();
      }
      // console.log(this.back);
      // console.log('bak')
    },
  },
};
</script>
<style lang="less" scoped>
@import url('../assets/style.less');

.bg {
  background-color: @bg_color;
}

.page {
  position: relative;
  /*background-color: #e7ff75;*/
  background-color: #333b45;

  .svg {
    top: 15px;
    left: 15px;
    position: absolute;
  }
  .title {
    text-align: center;
    font-size: 18px;
    font-weight: 100;
    color: white;
    line-height: 50px;
  }
  button {
    padding: 5vw;
  }
}
</style>
