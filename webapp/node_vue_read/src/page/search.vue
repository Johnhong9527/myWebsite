<template>
  <el-container>
    <el-header>
      <h3 style="text-align: center">搜索</h3>
    </el-header>
    <el-main>
      <el-row>
        <el-input :span="4" v-model="name" placeholder="请输入书名或作者">
          <el-button slot="append" icon="el-icon-search" @click="GET_SEARCH_LIST(name)"></el-button>
        </el-input>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "search",
    data() {
      return {
        name: ''
      }
    },
    methods: {
      ...mapMutations(['GET_SEARCH_LIST']),
      search() {
        if (this.name != '') {
          console.log(this.name)
        }
      }
    }

  }
</script>

<style scoped lang="less">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
