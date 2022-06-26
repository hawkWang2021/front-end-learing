// 目标: 作用域插槽
// 场景: 使用插槽, 使用组件内的变量
// 1. slot标签, 自定义属性和内变量关联
// 2. 使用组件, template配合v-slot="变量名"
// 变量名会收集slot身上属性和值形成对象
<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <!-- 作用域插槽 -->
      <panel-comp1 v-slot="info">
        <p>姓名:{{ info.row.name }}</p>
        <p>年龄:{{ info.row.age }}</p>
        <p>性别:{{ info.row.sex }}</p>
      </panel-comp1>
      <panel-comp1 v-slot="{ row }">
        <p>姓名:{{ row.name }}</p>
        <p>年龄:{{ row.age }}</p>
        <p>性别:{{ row.sex }}</p>
      </panel-comp1>
    </div>
  </div>
</template>

<script>
import PanelComp1 from '../作用域插槽/PanelComp1.vue'
export default {
  components: {
    PanelComp1
  }
}
</script>

<style scoped>
#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid blueviolet;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}
</style>