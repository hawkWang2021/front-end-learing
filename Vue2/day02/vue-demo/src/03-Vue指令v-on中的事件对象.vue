<template>
  <div id="app">
    <!-- 绑定事件  -没有() 的语法情况下，默认第一个参数就是参数对象 -->
    <a @click="prev">给点给点</a>
    <br />
    <!-- 绑定事件- 有()情况下，需要手动获取$event来传入事件对象 -->
    <a @click="prev($event)">给点给点</a>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    prev(event) {
      // 默认第一个参数就是事件对象
      event.preventDefault()
      console.log(event)
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
a {
  border: 1px solid #2c3e50;
}
</style>
