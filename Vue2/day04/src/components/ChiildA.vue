// # 事件总线- 在一个实例上监听，在一个实例上触发
// ● 打电话-触发事件
// ● 接电话-接收事件
// new Vue() - Vue实例
// ● this.$emit- 表示在当前的实例上触发
// ● this.$on- 表示在当前实例上监听
<template>
  <div>
    <h1>我系child-a,名叫{{ name }}</h1>
    <button @click="transValue">给兄弟传值</button>
  </div>
</template>
<script>
import eventBus from '../EventBus'
export default {
  data() {
    return {
      name: '弗洛伊德'
    }
  },
  methods: {
    transValue() {
      eventBus.$emit('UpdateName', this.name)
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid #000;
}
</style>