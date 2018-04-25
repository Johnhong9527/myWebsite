<template>
  <el-container>
    <el-header>
      <h2 style="text-align: center;line-height: 2.7">搜索</h2>
    </el-header>
    <el-main>
      <el-row>
        <el-input :span="4" v-model="name" placeholder="请输入书名或作者">
          <el-button slot="append" icon="el-icon-search" @click="GET_SEARCH_LIST(name)"></el-button>
        </el-input>
      </el-row>

      <el-row class="items_list">
        <div v-for="(item,index) in list" :key="index">
          <el-card :body-style="{ padding: '10px' }">
            <div class="text">
              <!--小说：<a :href="item.novel_url">{{item.novel}}</a>-->
              小说：{{item.novel}}
            </div>
            <div class="text">
              作者：{{item.author}}
            </div>
            <div class="text">
              <!--最新：<a :href="item.chapter_url">{{item.chapter}}</a>-->
              最新：{{item.chapter}}
            </div>
            <div class="text">
              更新：{{item.update_time}}
            </div>
            <div class="bottom clearfix">
              <el-button type="primary" size="mini" class="button button_no_margin_left"
                         @click="reader(item.novel_url)">阅读
              </el-button>
              <el-button type="primary" size="mini" class="button button_no_margin_left" @click="down(item)">下载
              </el-button>
              <el-button type="primary" size="mini" class="button button_no_margin_left"
                         @click="bookList(item)">目录
                <!--@click="GET_BOOK_LIST(item.novel_list)">-->
                <!--<router-link :to="{ path: 'list' }">目录</router-link>-->
              </el-button>
              <el-button type="primary" size="mini" class="button button_no_margin_left">发送到kindle</el-button>
            </div>
            <el-tag size="mini">{{item.types}}</el-tag>
          </el-card>
        </div>
      </el-row>

      <!--<el-row class="items_list">
        <el-col :span="5" v-for="(o, index) in 20" :key="o">
          <el-card :data-index="index" :body-style="{ padding: '0px' }">
            <img src="http://element-cn.eleme.io/static/hamburger.50e4091.png" class="images">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <el-button type="primary" size="mini" class="button button_no_margin_left">阅读</el-button>
                <el-button type="primary" size="mini" class="button button_no_margin_left">下载</el-button>
                <el-button type="primary" size="mini" class="button button_no_margin_left">目录</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>-->

    </el-main>
  </el-container>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "search",
    data() {
      return {
        name: ''
      }
    },
    created() {
      this.name = this.search_name
    },
    methods: {
      ...mapMutations(['GET_SEARCH_LIST', 'GET_BOOK_LIST', 'GET_BOOK_DOWN']),
      search() {
        if (this.name != '') {
          console.log(this.name)
        }
      },
      down(item) {
        console.log(item);
        this.GET_BOOK_DOWN(item)
        // self.book.novel_list
      },
      bookList(item) {
        let self = this;
        self.book = item
        this.GET_BOOK_LIST(self);
      },
      reader(url) {
        // let url = 'https://www.boquge.com/xs/80199/index.html';
        // novel_url = '/xs/33477/index.html'
        let urls = url.split('/')
        console.log(urls)
        for (let i in urls) {
          if (isNaN(urls[i])) {
            console.log(urls[i])
          }
        }
      }
    },
    computed: {
      ...mapState({
        list: state => state.search.list,
        search_name: state => state.search.search_name
      })
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

  .items_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    & > div {
      width: 25%;
      padding: 10px;
      box-sizing: border-box;
      .text {
        margin-bottom: 15px;
      }
      .el-card {
        box-sizing: padding-box;
        min-height: 250px;
        /*position: relative;*/
      }
      .button_no_margin_left {
        margin-left: 0;
      }
    }
  }

  .image {
    width: 100%;
    display: block;
  }

  .el-button--mini, .el-button--mini.is-round {
    padding: 7px 10px;
  }

  .clearfix {
    margin-top: 10px;
    text-align: center;
    /*position: absolute;*/
    bottom: 35px;
    left: 0;
    right: 0;
    padding: 0 5px;
    flex-wrap: wrap;
    display: flex;
    button {
      margin: 5px;
      a {
        text-decoration: none;
        &:active, &:hover, &:visited, &:hover {
          color: white;
        }
      }
    }
  }

  .el-tag {
    /*bottom: 5px;*/
    /*left: 5px;*/
    /*position: absolute;*/
    margin-top: 5px;
    user-select: none;
  }
</style>
