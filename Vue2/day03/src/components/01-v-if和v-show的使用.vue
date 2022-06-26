<template>
  <div id="app">
    <!-- v-if 和 v-show 显示隐藏图片 -->
    <div>
      <img v-show="isShow" :src="imgUrl" alt="" />
      <br />
      <button @click="isShow = !isShow">显示/隐藏</button>
    </div>
    <!-- v-if, v-else 和 v-else-if 的使用 -->
    <div>
      <p v-if="age >= 0 && age < 6">儿童</p>
      <p v-else-if="age >= 8 && age < 40">青年</p>
      <p v-else-if="age >= 41 && age < 65">中年</p>
      <p v-else-if="age >= 66">老年</p>
    </div>
  </div>
</template>

<script>
import imgUrl from './assets/duck.png'
export default {
  name: 'App',
  data() {
    return {
      isShow: false,
      imgUrl,
      age: 18
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 200px;
  height: 200px;
}
</style>
