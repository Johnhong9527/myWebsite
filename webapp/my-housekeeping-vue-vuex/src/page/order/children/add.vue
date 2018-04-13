<template>
  <div class="circle">
    <!-- 1 -->
    <div class="pie">
      <div class="pie_div">
        <div>
          <img src="http://file.ituring.com.cn/SmallCover/1708febcfca2b7d1f8ad" alt="">
        </div>
      </div>
      <div class="pie_div">
        <div></div>
      </div>
      <div class="pie_div">
        <div></div>
      </div>
    </div>
    <!-- 2 -->
    <div class="pie">
      <div class="pie_div">
        <div></div>
      </div>
      <div class="pie_div">
        <div></div>
      </div>
      <div class="pie_div">
        <div></div>
      </div>
    </div>
    <!-- 3 -->
    <div class="pie">
      <div class="pie_div">
        <div>♈</div>
      </div>
      <div class="pie_div">
        <div></div>
      </div>
      <div class="pie_div">
        <div></div>
      </div>
    </div>
    <!-- 4 -->
    <div class="pie">
      <div class="pie_div">
        <div></div>
      </div>
      <div class="pie_div">
        <div></div>
      </div>
      <div class="pie_div">
        <div></div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'add',
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.circle {
  width: 100vw;
  height: 100vw;

  .pie {
    width: 50vw;
    height: 50vw;
    overflow: hidden;
    position: relative;
    float: left;
    .pie_div {
      width: 100%;
      height: 100%;
      position: absolute;
      &:nth-child(1) {
        transform: rotate(0deg);
        // background-color: rgb(209, 32, 32);
      }
      &:nth-child(2) {
        transform: rotate(30deg);
        // background-color: rgb(10, 250, 150);
        div {
          // background-color: rgb(63, 8, 97);
        }
      }
      &:nth-child(3) {
        transform: rotate(60deg);
        // background-color: rgb(11, 23, 197);
      }
      & > div {
        width: 50%;
        height: 50%;
        position: absolute;
        border: 5px solid #bb1414;
        // background-color: rgb(129, 20, 202);
      }
    }
    &:nth-child(1) {
      // background-color: aqua;
      .pie_div {
        border-top-left-radius: 100%;
        transform-origin: bottom right;
        & > div {
          bottom: 0;
          right: 0;
          border-right: 0;
          border-top: 0;
          border-top-left-radius: 100%;
          transform-origin: bottom right;
          img {
            width: 5vw;
            position: absolute;
            bottom: 1vw;
            right: 15vw;
          }
        }
      }
    }
    &:nth-child(2) {
      // background-color: rgb(255, 230, 0);
      .pie_div {
        border-top-right-radius: 100%;
        transform-origin: bottom left;
        & > div {
          bottom: 0;
          left: 0;
          border-right: 0;
          border-bottom: 0;
          border-top-right-radius: 100%;
          transform-origin: bottom left;
        }
      }
    }
    &:nth-child(3) {
      // background-color: rgb(197, 22, 168);
      .pie_div {
        border-bottom-left-radius: 100%;
        transform-origin: top right;
        & > div {
          top: 0;
          right: 0;
          border-left: 0;
          border-top: 0;
          border-bottom-left-radius: 100%;
          transform-origin: top right;
        }
      }
    }
    &:nth-child(4) {
      // background-color: rgb(37, 185, 136);
      .pie_div {
        border-bottom-right-radius: 100%;
        transform-origin: top left;
        & > div {
          top: 0;
          left: 0;
          border-left: 0;
          border-bottom: 0;
          border-bottom-right-radius: 100%;
          transform-origin: top left;
        }
      }
    }
  }
}
</style>
