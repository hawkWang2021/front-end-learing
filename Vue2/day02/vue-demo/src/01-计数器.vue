<template>
  <div id="app">
    <p>{{ title }}:{{ count }}</p>
    <button @click="addCount">点我+1</button>
    <button @click="addCount1(5)">点我+5</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: '当前计数',
      count: 0
    }
  },
  methods: {
    addCount() {
      this.count++
    },
    addCount1(num) {
      this.count += num
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
