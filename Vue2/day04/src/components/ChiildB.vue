<template>
  <div>
    <h1>我系child-b,名叫{{ name }}</h1>
  </div>
</template>

<script>
import eventBus from '../EventBus'
export default {
  data() {
    return {
      name: ''
    }
  },
  // 这里要保证提前监听-保证监听你的内容
  // 实例创建之后执行
  created() {
    eventBus.$on('UpdateName', (name) => {
      this.name = name
    })
  }
}
</script>

<style scoped>
div {
  border: 1px solid #000;
}
</style>