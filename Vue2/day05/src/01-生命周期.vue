<template>
  <div id="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <time-counter v-if="isShow"></time-counter>
  </div>
</template>

<script>
import TimeCounter from './components/TimeCounter.vue'
export default {
  name: 'App',
  data() {
    return {
      isShow: true
    }
  },
  components: {
    TimeCounter
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
