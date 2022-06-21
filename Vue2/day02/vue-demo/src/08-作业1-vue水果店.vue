<template>
  <div id="app">
    <h1>欢迎光临_vue开发的收银系统_水果店</h1>
    <table border="1">
      <tr>
        <th v-text="productInformation"></th>
      </tr>
      <tr>
        <td>请输入你要购买的斤数<input type="text" v-model.number="kilogram" /></td>
      </tr>
      <tr>
        <td><button @click="checkOut">结账买单</button></td>
      </tr>
      <tr>
        <td>结账单:总价{{ totalPrice }}￥元 折后价:{{ discountedPrice }} 省了{{ saveMoney }}￥元</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      productInformation: `苹果 10 ￥/斤，折扣 < 8 折 >`,
      kilogram: 0,
      discountedPrice: 0,
      saveMoney: 0
    }
  },
  methods: {
    checkOut() {
      this.totalPrice = this.kilogram * 10
      this.discountedPrice = this.totalPrice * 0.8
      this.saveMoney = this.totalPrice - this.discountedPrice
    }
  }
}
</script>
<style>
#app {
  text-align: center;
}
table {
  width: 666px;
  margin: 10px auto;
}
</style>