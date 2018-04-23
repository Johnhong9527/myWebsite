<template>
  <el-row>
    <!--{{info}}-->
    <div style="text-align: center;line-height: 3">
      <h1>{{info.novel}}:{{info.author}}</h1>
    </div>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <el-tag v-for="(item,index) in list" :key="index" v-if="item.title !== null">
          <a :href="item.title_url" target="_blank">{{item.title}}</a>
        </el-tag>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  import {mapState} from 'vuex'
  
  export default {
    name: 'list',
    created() {
      if (Object.keys(this.list).length == 0) {
        this.$router.push({path: '/search'})
      }
    },
    computed: {
      ...mapState({
        list: state => state.book.list,
        info: state => state.book.info
      })
    },
    methods: {}
  }
</script>
<style scoped lang="less">
  .bg-purple-dark {
    display: flex;
    flex-wrap: wrap;
    .el-tag {
      text-align: center;
      display: block;
      width: calc(50% - 10px);
      margin: 5px;
      a {
        text-decoration: none;
      }
    }
  }
</style>
