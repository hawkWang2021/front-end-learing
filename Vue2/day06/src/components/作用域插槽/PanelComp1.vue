// ! 总结: 组件内变量绑定在slot上, 然后使用组件v-slot="变量",变量上就会绑定slot身上属性和值
<template>
  <div>
    <!-- 按钮标题 -->
    <div class="title">
      <h4>个人信息</h4>
      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? '收起' : '展开' }}
      </span>
    </div>
    <!-- 下拉内容 -->
    <div class="container" v-show="isShow">
      <slot :row="obj">默认内容</slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      obj: {
        name: '小王',
        age: 18,
        sex: '男'
      }
    }
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0 1em;
}

.title h4 {
  line-height: 2;
  margin: 0;
}

.container {
  border: 1px solid #ccc;
  padding: 0 1em;
}

.btn {
  /* 鼠标改成手的形状 */
  cursor: pointer;
}

img {
  width: 50%;
}
</style>