<template>
  <div class="my-tab-bar">
    <div
      @click="toggleViews(index, item)"
      class="tab-item"
      :class="{ current: currentIndex === index }"
      v-for="(item, index) of arr"
      :key="index"
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
      currentIndex: 0
    }
  },
  methods: {
    toggleViews(index, item) {
      this.currentIndex = index
      this.$emit('updateComName', item.componentName)
    }
  },
  props: {
    arr: {
      type: Array,
      required: true,
      Validator(value) {
        if (value.length >= 2 && value.length <= 5) {
          return true
        } else {
          console.error('数据必须在2-5项之间')
          return false
        }
      }
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
  color: #84fab0;
}
</style>