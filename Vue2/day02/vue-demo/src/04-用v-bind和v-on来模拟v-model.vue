<template>
  <div id="app">
    <h1>{{ username }}</h1>
    <input type="text" v-model="username" />
    <h1>组合命令</h1>
    <!-- change是失去焦点才触发 -->
    <!-- input是值发生变化就触发 -->
    <!-- 数值绑定在 this.username ,事件绑定 input ,当事件触发时调用 changeUserName()函数来修改 this.username-->
    <input :value="username" @input="changeUserName" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '老高'
    }
  },
  methods: {
    changeUserName(event) {
      this.username = event.target.value
    }
  }
}
</script>

<style>
</style>