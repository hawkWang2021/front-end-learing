<template>
  <div id="app">
    <h1>倒计时{{ count }}秒</h1>
  </div>
</template>

<script>
export default {
  name: 'TimeCounter',
  data() {
    return {
      count: 60
    }
  },
  beforeCreate() {
    console.log('创建前')
  },
  created() {
    this.flag = setInterval(() => {
      this.count--
    }, 1000)
    console.log('创建后')
  },
  beforeMount() {
    console.log('挂载前')
  },
  mounted() {
    console.log('挂载后')
  },
  beforeUpdate() {
    console.log('更新前')
  },
  updated() {
    console.log('更新后')
  },
  beforeDestroy() {
    console.log('销毁前')
    clearInterval(this.flag)
  },
  destroyed() {
    console.log('销毁后')
  }
}
</script>

<style scoped>
#app {
  width: 200px;
  height: 100px;
  border: 1px solid #ccc;
  margin: 10px auto;
}
</style>