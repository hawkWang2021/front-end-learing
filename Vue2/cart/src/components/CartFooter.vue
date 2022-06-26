// # 全选状态的设定
// 1. 全选组件在Footer中，状态的展示依赖list中是否全部都勾选， 状态肯定是父组件传给Footer的
// 2. 父组件定义计算属性- 算出来有没有全部选中
// 3. 传给Footer组件- 赋值给checked属性
// 4. 监听input的值改变事件
// 5. 触发自定义事件-将true/false => 父组件
// 6. 父组件监听事件
// 7. 根据true/false => 影响所有数据
<template>
  <div class="cart-footer">
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="footerCheck"
        :checked="isAll"
        @change="updateChecked"
      />
      <label class="custom-control-label" htmlFor="footerCheck"> 全选 </label>
    </div>
    <div>
      <span>合计:</span>
      <span class="price">¥ {{ totalPrice }}</span>
    </div>
    <button type="button" class="footer-btn btn btn-primary">
      结算 ({{ totalCount }})
    </button>
  </div>
</template>

<script>
export default {
  props: ['isAll', 'totalCount', 'totalPrice'],
  methods: {
    updateChecked(event) {
      this.$emit('updateAll', event.target.checked)
    }
  }
}
</script>

<style>
.cart-footer {
  z-index: 999;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;
}
.cart-footer .price {
  color: red;
  font-weight: bold;
  font-size: 15px;
}
.cart-footer .footer-btn {
  min-width: 80px;
  height: 30px;
  line-height: 24px;
  border-radius: 25px;
  padding: 0;
}
#footerCheck {
  margin-right: 10px;
}
</style>