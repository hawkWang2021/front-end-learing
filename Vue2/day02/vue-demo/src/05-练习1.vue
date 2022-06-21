<template>
  <div id="app">
    <ul>
      <li v-for="item of items" :key="item">{{ item }}</li>
    </ul>
    <button @click="clickHandle">没事走两步</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ['帅哥', '美女', '程序员']
    }
  },
  methods: {
    clickHandle() {
      this.items.unshift(this.items.pop())
    }
  }
}
</script>
<style>
</style>