# 九宫格

```html
<template>
  <div class="nice">
    <div v-for="item in list">
      <div>
        {{item}}
      </div>
    </div>
    <div class="add" @click="add">
      <div>
        +
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nice",
    data() {
      return {
        list: [],
        i:0
      }
    },
    created() {
      // this.add();

    },
    methods: {
      add() {
        let self = this;
        self.list.push(self.i);
        self.i++
      }
    }
  }
</script>

<style scoped lang="less">
  .nice {
    display: flex;
    flex-wrap: wrap;
    padding-right: 15px;
    & > div {
      width: 33.33%;
      padding: 15px;
      padding-right: 0;
      box-sizing: border-box;
      text-align: center;
      transition: all .3s;
      div {
        color: white;
        font-size: .8rem;
        border: 1px solid rgba(0, 0, 0, 0.6);
        background-color: #ff281c;
        padding: 35px;
        box-sizing: padding-box;
        transition: all .3s;
      }
    }
    .add {

    }
  }
</style>
```

