<template>
  <div id="app">
    <cart-header></cart-header>
    <good-item
      v-for="item of list"
      :key="item.id"
      :item="item"
      @changeCheckedState="changeCheckedState"
    >
      {{ item.name }}
    </good-item>
    <cart-footer
      :isAll="isAll"
      @updateAll="updateAll"
      :totalCount="totalCount"
      :totalPrice="totalPrice"
    ></cart-footer>
  </div>
</template>

<script>
// 导入 bootstrap 样式文件：
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import GoodItem from './components/GoodItem.vue'
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getGoodsList()
  },
  components: {
    CartHeader,
    CartFooter,
    GoodItem
  },
  methods: {
    getGoodsList() {
      axios({
        methods: 'get',
        url: '/goodsList'
      }).then(({ data }) => {
        this.list = data
      })
    },
    changeCheckedState(id, goods_state) {
      // 修改数组
      // 重新赋值一个新数组-原数组长度一样
      this.list.map((item) => {
        if (item.id === id) {
          // items within the list
          item.goods_state = goods_state
        }
        return item
      })
    },
    updateAll(goods_state) {
      this.list = this.list.map((item) => {
        item.goods_state = goods_state
        return item
      })
    }
  },
  computed: {
    isAll() {
      // 计算是否所有的复选框都勾选上了
      return this.list.every((item) => item.goods_state)
    },
    totalCount() {
      return this.list.reduce((prevValue, item) => {
        return prevValue + (item.goods_state ? item.goods_count : 0)
      }, 0)
    },
    totalPrice() {
      return this.list.reduce((prevValue, item) => {
        return (
          prevValue +
          (item.goods_state ? item.goods_count : 0) * item.goods_price
        )
      }, 0)
    }
  }
}
</script>

<style scoped>
#app {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
