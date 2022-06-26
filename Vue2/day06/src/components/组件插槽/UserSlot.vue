// v-bind 可以省略成 :
// v-on: 可以省略成 @
// v-slot: 可以简化成 #
// 总结: slot的name属性起插槽名, 使用组件时, template配合#插槽名传入具体标签
// v-slot一般用跟template标签使用 (template是html5新出标签内容模板元素, 不会渲染到页面上, 一般被vue解析内部标签)

// * 插槽最重要的作用-自定义结构
// * 写一个slot标签-占位-可以写name-写name就是具名插槽，不是name就是匿名
// * <slot>备胎</slot>  <slot name="abc">备胎</slot> 后备内容
// * 作用域插槽-父组件想要在填坑的时候使用子组件的数据
<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <!-- 具名插槽 -->
      <panel-comp>
        <template v-slot:title>
          <h4 style="color: lightgreen">芙蓉楼送辛渐</h4>
        </template>
        <template v-slot:content>
          <p>寒雨连江夜入吴,</p>
          <p>平明送客楚山孤。</p>
          <p>洛阳亲友如相问，</p>
          <p>一片冰心在玉壶。</p>
        </template>
      </panel-comp>
      <panel-comp>
        <template #title>
          <h4 style="color: red">芙蓉楼送辛渐</h4>
        </template>
        <template #content>
          <p>寒雨连江夜入吴,</p>
          <p>平明送客楚山孤。</p>
          <p>洛阳亲友如相问，</p>
          <p>一片冰心在玉壶。</p>
        </template>
      </panel-comp>
    </div>
  </div>
</template>

<script>
import PanelComp from './PanelComp.vue'
export default {
  components: {
    PanelComp
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