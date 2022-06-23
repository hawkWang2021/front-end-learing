<template>
  <!-- :class="{ 类名: 布尔值 }" -->
  <div id="app">
    <!-- 点击切换样式 -->
    <div>
      <button @click="flag = !flag">样式切换</button>
      <div :class="{ emName: flag }">你好你好你好你好</div>
    </div>
    <hr />
    <!-- 点谁谁有样式 -->
    <div>
      <ul>
        <li
          @click="selectId(item.id)"
          v-for="item of list"
          :key="item.id"
          :class="{ rua: isSelected === item.id }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      flag: false,
      list: [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
        { id: 3, name: '王五' }
      ],
      isSelected: null
    }
  },
  methods: {
    selectId(id) {
      this.isSelected = id
    }
  }
}
</script>
<style>
.emName {
  color: aqua;
  font-size: 30px;
}
.rua {
  color: lightsalmon;
  font-size: 30px;
}
</style>