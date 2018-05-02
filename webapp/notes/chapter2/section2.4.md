# SVG

```html
<template>
  <div>
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" :width=line_size :height=line_height>
        <line x1="0" :y1=line_height/2 :x2=line_size y2="0" :stroke=stroke :stroke-width=stroke_width></line>
        <line x1="0" :y1=line_height/2 :x2=line_size :y2=line_height :stroke=stroke :stroke-width=stroke_width></line>
      </svg>
    </span>
    <div>
      <hr/>{{stroke}}
      <hr/> {{stroke_width}}
      <hr/>
      <div style="display:flex;">
        <button @click="add">+</button>
        <button @click="cut">-</button>
        <button @click="stroke = 'blue'" style="background-color: blue;">blue</button>
        <button @click="stroke = 'green'" style="background-color: green;">green</button>
        <button @click="reload">reload</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stroke: 'rgb(216, 55, 55)',
      stroke_width: 4,
      line_size: 30,
      line_height: 40,
    };
  },
  methods: {
    add() {
      this.line_size++;
      this.line_height++;
      this.stroke_width++;
    },
    cut() {
      this.line_size--;
      this.line_height--;
      this.stroke_width--;
    },
    reload() {
      this.stroke = 'rgb(216, 55, 55)';
      this.stroke_width = 4;
      this.line_size = 30;
      this.line_height = 40;
    },
  },
};
</script>
<style lang="less" scoped>
@import url('../assets/style.less');
.bg {
  background-color: @bg_color;
}
button {
  padding: 5vw;
}
</style>
```