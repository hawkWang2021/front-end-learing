// 一般情况下- 不需要获取 dom 的，数据就是视图
// echarts-init(DOM) 可能需要使用 DOM
// 1.给想要获取 dom 的标签一个ref属性- h5标签上
// 2.ref属性必须在 mounted 及以后获取
// this.$refs.abc # 就是真实的 dom 对象
// this.$refs.efg # 指的是 login-com 的实例对象-也就是该组件的 this
// # this.$parent - 子组件可以拿到父组件的 this
// # this.$refs.属性 - 父组件可以拿到子组件的 this
<template>
  <div id="app">
    <login-com ref="myLogin"></login-com>
    <button @click="callChildMethod" ref="btn">调用子组件方法</button>
  </div>
</template>

<script>
import LoginCom from './03-短信登录.vue'
export default {
  name: 'App',
  components: {
    LoginCom
  },
  methods: {
    callChildMethod() {
      // # 使用ref实现父传子
      // 1. 确定父子关系
      // 2. 给子组件的标签一个ref属性
      // 3. this.$refs.属性获取子组件的实例（this）
      // 4. 通过实例就可以调用方法 传值
      this.$refs.myLogin.login() // 这里就可以实现父传子
      console.log('this.$refs.myLogin: ', this.$refs.myLogin)
      console.log('this.$refs.btn: ', this.$refs.btn)
    }
  }
}
</script>

<style scoped>
button {
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
}
</style>
