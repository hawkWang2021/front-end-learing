// 在App.vue中声明数据，props传递到Main中显示

// # 删除任务
// 1. 找到删除按钮-注册删除按钮的点击事件-传入要删除的id
// 2. 触发自定义事件-传出id
// 3. 父组件监听
<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="item of list" :key="item.id" :class="{ completed: item.done }">
        <div class="view">
          <input class="toggle" type="checkbox" v-model="item.done" />
          <label>{{ item.name }}</label>
          <button @click="delTodo(item.id)" class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    delTodo(id) {
      id && this.$emit('delTodo', id) // 触发删除事件
    }
  }
}
</script>

<style scoped>
</style>