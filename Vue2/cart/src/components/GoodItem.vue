// # 绑定单选框影响的购物车数据
// ● props数据单向数据流-修改的数据-回到父组件
// ! 在子组件中v-model绑定props数据不允许，单向数据流
// ● 将数据显示到组件上-绑定了input的 checked数据-
// ● 监听input的change事件
// ● 子传父-改变的值和id传回给父组件
// ● 父组件监听这个事件
// ● 重新生成一个新数组- 找到对应的id 改变它的状态
<template>
  <div class="cart-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="`input_${item.id}`"
          :checked="item.goods_state"
          @change="changeCheckedState"
        />
        <label class="custom-control-label" :for="`input_${item.id}`">
          <img :src="item.goods_img" alt="" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ item.goods_name }}</div>
      <div class="bottom">
        <span class="price">¥ {{ item.goods_price }}</span>
        <span>{{ item.goods_count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    changeCheckedState(event) {
      this.$emit('changeCheckedState', this.item.id, event.target.checked) // 子传父
    }
  }
}
</script>

<style scoped>
.cart-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.cart-goods-item .left img {
  width: 120px;
  height: 120px;
  margin-right: 8px;
  border-radius: 10px;
}
.cart-goods-item .left .custom-control-label::before,
.cart-goods-item .left .custom-control-label::after {
  top: 50px;
}
.cart-goods-item .right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-goods-item .right .bottom {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}
.cart-goods-item .right .bottom .price {
  color: red;
  font-weight: bold;
}
.custom-control-input {
  margin-right: 10px;
}
</style>