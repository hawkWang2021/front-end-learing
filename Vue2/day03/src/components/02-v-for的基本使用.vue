<template>
  <div id="app">
    <div>
      <h1>新闻列表：</h1>
      <ul>
        <li v-for="(item, index) of newsList" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div>
      <h1>手机品牌选择:</h1>
      <ul>
        <li v-for="item of brands" :key="item.id">
          {{ item.id }} -- {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
// # 摘自 vue 中文文档
// 当 Vue 正在更新使用 v-for 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。这个类似 Vue 1.x 的 track-by="$index"。
// 这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。
// 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key attribute：
// <div v-for="item in items" v-bind:key="item.id">
//   <!-- 内容 -->
// </div>
// 建议尽可能在使用 v-for 时提供 key attribute，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。
// 因为它是 Vue 识别节点的一个通用机制，key 并不仅与 v-for 特别关联。后面我们将在指南中看到，它还具有其它用途。
<script>
export default {
  data() {
    return {
      newsList: [
        `习近平主席倡导的全球治理观深刻启迪世界`,
        `学习总书记用典 开创百姓富生态美的多彩贵州新未来`,
        `东北边疆——更富更美更开放`,
        `线上增强“新活力” 线下回归“烟火气”`,
        `“八纵八横”添新线 助力区域协调发展`,
        `阿桑奇案照出了美英声称的维护"新闻自由"是何等虚伪`,
        `看列车运行图调整的“增”与“减”`
      ],
      brands: [
        { id: 1, name: '小米' },
        { id: 2, name: '华为' },
        { id: 3, name: '苹果' }
      ]
    }
  }
}
</script>
<style>
#app {
  margin-top: 60px;
}
</style>

