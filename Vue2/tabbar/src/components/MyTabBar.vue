<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(item, index) of tabList"
      :key="index"
      :class="{ current: activeIndex === index }"
      @click="toggleCom(index, item.componentName)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0 // 高亮元素下标
    }
  },
  props: {
    tabList: {
      type: Array,
      required: true,
      validator(value) {
        if (value.length >= 2 && value.length <= 5) {
          return true
        } else {
          console.error('数据源必须在2-5项')
          return false
        }
      }
    }
  },
  methods: {
    toggleCom(index, comName) {
      this.activeIndex = index
      this.$emit('updateComName', comName)
    }
  }
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>