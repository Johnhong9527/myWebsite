<template>
  <div>
    <div v-for="(item,index) in list" :key="index" v-if="item.title !== null">
      <a :href="item.title_url">{{item.title}}</a>
    </div>
  </div>
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
        list: state => state.book.list
      })
    },
    methods: {}
  }
</script>
<style scoped lang="less">

</style>
