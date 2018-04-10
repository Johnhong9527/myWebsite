<template>
  <div class="home-box">
    <div class="h-box">
      <button @click='cs'>测试</button>
      <!--banner-->
      <div class="banner">
        <img :src="banner" alt="">
      </div>
      <!--套餐图-->
      <div class="home">
        <img class="m_b_5" :src="yuesao" alt="" @click='demand(1)'>
        <img class="m_b_5" src="http://odulvej8l.bkt.clouddn.com/2018-01-08-3.jpg" alt="">
        <img class="m_b_5" style="width: 99.99%;" src="http://odulvej8l.bkt.clouddn.com/2018-01-08-4.jpg" alt="" @click='demand(2)'>
        <div class="category">
          <div>
            <img src="http://odulvej8l.bkt.clouddn.com/2018-01-08-5.jpg" alt="" @click='demand(0)'>
          </div>
          <div>
            <img src="http://odulvej8l.bkt.clouddn.com/2018-01-08-6.jpg" alt="" @click='demand(4)'>
          </div>
          <div>
            <img src="http://odulvej8l.bkt.clouddn.com/2018-01-08-7.jpg" alt="" @click='demand(3)'>
          </div>
        </div>
      </div>
    </div>

    <!-- <tabbar style="background-color: #333b45;position: fixed;bottom: 0;left: 0;">
      <tabbar-item selected>
        <img class="icon_img" slot="icon" src="http://oduj3utzz.bkt.clouddn.com/2018_03_26_home.svg">
        <img class="icon_img" slot="icon-active" src="http://oduj3utzz.bkt.clouddn.com/2018_03_26_home_green.svg">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item @click.native="registeredF">
        <img class="icon_img" slot="icon" src="http://oduj3utzz.bkt.clouddn.com/2018_03_26_order.svg">
        <img class="icon_img" slot="icon-active" src="http://oduj3utzz.bkt.clouddn.com/2018_03_26_order_green.svg">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'home',
  data() {
    return {
      banner: 'http://odulvej8l.bkt.clouddn.com/2018-01-08-1.jpg',
      yuesao: 'http://odulvej8l.bkt.clouddn.com/2018-01-08-2.jpg',
      footer: 'http://odulvej8l.bkt.clouddn.com/2018-01-17-8.jpg',
      registered: false,
      administrator: false,
    };
  },
  methods: {
    ...mapMutations(['GET_USERROLE', 'GET_USERINFO']),
    cs() {
      console.log(this.$store.state);
    },
    demand(type) {
      let self = this;
      // switch (self.userIdentity) {
      //   case 1:
      //     weui.alert('家政人员无法预约服务！');
      //     return;
      //     break;
      //   case 2:
      //     weui.alert('门店管理员无法预约服务！');
      //     return;
      //     break;
      // }
      // config.serviceType = null;
      // config.serviceType = type;
      this.$router.push({ path: '/reservation' });
    },
    registeredF() {
      this.myOrder();
    },
    myOrder() {
      switch (this.userIdentity) {
        case 1:
          this.$router.push({ path: '/houseKeeping/info' });
          break;
        default:
          this.$router.push({ path: '/order' });
          break;
      }
    },
  },
  created() {
    let self = this;
    // config.userInfo = []; // 初始化数据
    // 人员身份识别
    // 用户是否为管理员
    // self.registered = true;
    this.GET_USERROLE(self);
    // this.GET_USERINFO();
    setTimeout(() => {
      console.log(this.$store.state.user);
    }, 100);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.m_b_5 {
  margin-bottom: 10px;
}

.banner {
  margin-bottom: 5px;
}

img {
  display: block;
  width: 100%;
}

.icon_img {
  width: 20px;
  margin: 0 auto;
}

.home {
  padding: 15px;
  padding-top: 10px;
  margin-bottom: 55px;
  .category {
    display: flex;
    flex-direction: row;
    & > div {
      flex: 1;
    }
  }
}

.registered {
  position: fixed;
  bottom: 150px;
  right: 15px;
  background: #0ac8ff;
  width: 60px;
  font-size: 15px;
  color: white;
  text-shadow: 1px 1px 6px #000;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0px 0px 15px -3px #000;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  & > img {
    width: 100%;
  }
}
</style>
