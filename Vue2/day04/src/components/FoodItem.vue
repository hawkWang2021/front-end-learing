<template>
  <div>
    <h3>标题: {{ item.name }}</h3>
    <p>价格: {{ item.price }}元</p>
    <p>{{ item.intro }}</p>
    <p>当前下标: {{ index }}</p>
    <button @click="cutPrice(index, 1)">砍一刀(props方法)</button>
    <button @click="officialCut">砍一刀(官方)</button>
    <button @click="parentCut">砍一刀(.$parent)</button>
  </div>
</template>

<script>
export default {
  // 接收父组件传过来的属性
  props: ['item', 'index', 'cutPrice'], // 字符串数组-里面的字符串 是父组件的传过来
  methods: {
    officialCut() {
      // 触发事件
      this.$emit('updatePrice', this.index, 2)
    },
    parentCut() {
      // this.$parent
      this.$parent.cutPrice(this.index, 3) // 不推荐用,真正的在项目中的,层级非常多,容易混乱 父子关系
    }
  }
}
</script>

<style scoped>
div {
  padding-bottom: 10px;
  border: 1px solid #000;
  width: 200px;
  margin: 20px auto;
  text-align: center;
}
</style>