// 1. 获取input的值 - 使用v-model
// 2. 绑定回车事件
// 3. 触发事件
// 4. 父组件监听事件
<template>
  <header class="header">
    <h1>todos</h1>
    <input
      @keyup.enter="enterName"
      class="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      v-model="name"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    enterName() {
      return this.name && this.$emit('addTodo', this.name) && (this.name = '')
    }
  }
}
</script>

<style scoped>
</style>