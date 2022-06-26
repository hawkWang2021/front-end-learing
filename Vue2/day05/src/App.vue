// $nextTick方法
// ! 会等到数据渲染完成，dom更新之后执行
// this.$nextTick(函数体)
// Vue.nextTick(函数体)
<template>
  <div>
    <p ref="p">计数器:{{ count }}</p>
    <button @click="AddOne">加1</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  // # 场景： 一般用在需要获取更新的dom的时候，又或者 props传值
  // props更新要重新渲染，也是一个异步过程
  // 父组件 =》 子组件的方法
  // ref- 获取子组件的实例-this
  // ● 子组件的属性有props属性-不能保证已经更新完了
  // ● nextTick 执行的时候 说明渲染完成了 数据已经更新
  methods: {
    AddOne() {
      this.count++
      // console.log(this.$refs.p.innerHTML)
      // 当遇到获取的数据的是上一次的时候，说明遇到了异步，就可以使用$nextTick
      this.$nextTick(() => {
        console.log(this.$refs.p.innerHTML)
      })
    }
  }
}
</script>

<style scoped>
</style>