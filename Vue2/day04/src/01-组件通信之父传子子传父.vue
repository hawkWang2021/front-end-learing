<template>
  <div>
    <food-item
      v-for="(item, index) of list"
      :key="index"
      :item="item"
      :index="index"
      :cutPrice="cutPrice"
      @updatePrice="cutPrice"
    ></food-item>
  </div>
</template>
<script>
import FoodItem from './components/FoodItem.vue'
export default {
  name: 'App',
  components: {
    FoodItem
  },
  data() {
    return {
      list: [
        {
          name: '苹果',
          price: 20,
          intro: '好吃好吃的'
        },
        {
          name: '香蕉',
          price: 15,
          intro: '真香真香的'
        },
        {
          name: '西瓜',
          price: 10,
          intro: '真好吃呀'
        }
      ]
    }
  },
  methods: {
    cutPrice(index, p) {
      // 更新数组中的价格-props单向数据流
      let item = this.list.find((item, i) => i === index)
      if (item) {
        item.price -= p
      }
    }
  }
}
</script>

<style scoped>
</style>