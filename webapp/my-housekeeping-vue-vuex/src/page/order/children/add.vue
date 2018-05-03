<template>
  <div>
    <x-header :back="back" :title='title' bgColor="#333b45" strokeColor="#fff" />
    <h2>
      add order
    </h2>
  </div>
</template>
<script>
export default {
  name: 'add',
  data() {
    return {
      title: '添加订单',
      back: '/order/list',
    };
  },
};
</script>
