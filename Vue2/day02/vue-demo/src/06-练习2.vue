<template>
  <div id="app">
    <ul>
      <li v-for="(item, index) of items" :key="index">{{ item }} <button @click="deleteItem(index)">删除</button></li>
    </ul>
    <button @click="generateItem">生成</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [1, 2, 3]
    }
  },
  methods: {
    generateItem() {
      let num = Math.floor(Math.random() * 10) + 1
      this.items.push(num)
    },
    deleteItem(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>
<style lang="">
</style>