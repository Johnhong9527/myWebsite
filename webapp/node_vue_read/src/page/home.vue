<template>
  <div>
    <title>搜索</title>
    <div class="search">
      <input type="text" v-model="name" :placeholder="name==''?'请输入小说名或作者名':name"><span>搜索</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: ""
      };
    },
    watch: {
      width: function (val, oldVal) {
        console.log(val);
        if (val == "") {
          this.width = val = 0;
        }
        if (val > 100) {
          this.width = val = oldVal;
        }
        this.width = Number.parseInt(val);
      }
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .search {
    // border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    height: 35px;
    width: 85%;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 20px auto 0;
    input {
      line-height: 2;
    }
    span {
      padding: 0 5px;
      line-height: 2;
      color: aliceblue;
      background-color: rgb(11, 49, 82);
    }
  }
</style>
