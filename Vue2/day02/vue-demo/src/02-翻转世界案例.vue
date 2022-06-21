<template>
  <div id="app">
    <p>{{ str }}</p>
    <button @click="reverseStr($str)">翻转世界</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      str: 'hello world!'
    }
  },
  methods: {
    reverseStr() {
      this.str = this.str.split('').reverse().join('')
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
