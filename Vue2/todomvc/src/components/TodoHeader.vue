// # 目标：在顶部输入框输入要完成的任务名, 敲击回车, 完成新增功能
// 1. 获取input的值 - 使用v-model
// 2. 绑定回车事件
// 3. 触发事件
// 4. 父组件监听事件

//目标: 点击左上角v号, 可以设置一键完成, 再点一次取消全选

// * 需求1: 点击全选 – 小选框受到影响
// * 需求2: 小选框都选中(手选) – 全选自动选中状态

// 分析：

// 1.: TodoHeader.vue – 计算属性 - isAll
// 2.: App.vue – 传入数组list – 在isAll的set里影响小选框
// 3.: isAll的get里统计小选框最后状态, 影响isAll – 影响全选状态
// 4.: 考虑无数据情况空数组 – 全选不应该勾选
// 提示: 就是遍历所有的对象, 修改他们的完成状态属性的值
<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
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
  props: ['list'],
  data() {
    return {
      name: ''
    }
  },
  methods: {
    enterName() {
      return this.name && this.$emit('addTodo', this.name) && (this.name = '')
    }
  },
  computed: {
    isAll: {
      set(checked) {
        this.list.forEach((element) => {
          element.done = checked
        })
      },
      get() {
        // 如果没有数据, 直接返回false-不要让全选勾选状态
        return (
          this.list.length !== 0 &&
          this.list.every((element) => element.done === true)
        )
      }
    }
  }
}
</script>

<style scoped>
</style>