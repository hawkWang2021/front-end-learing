<template>
  <div class="home">
    <h1>这是首页</h1>
    <button @click="$router.push('/about')">去About页面(push)</button>
    <button @click="$router.replace('/about')">去About页面(replace)</button>
    <button @click="btnUseRouter">直接使用实例跳转</button>
    <!-- query传参数 -->
    <button @click="btnToAbout">跳转到about页面</button>
    <!-- params传参数 -->
    <button @click="btnToAbout2">跳转到about页面(params)</button>
    <!-- 路由嵌套 -->
    <div
      style="
        width: 800px;
        height: 400px;
        border: 1px solid purple;
        margin: 40px auto;
      "
    >
      <!-- <router-link to="/home/a">主页-子页面1</router-link>
      <router-link to="/home/b">主页-子页面2</router-link>
      <router-link to="/home/c">主页-子页面3</router-link> -->
      <router-link to="a">主页-子页面1</router-link>
      <router-link to="b">主页-子页面2</router-link>
      <router-link to="c">主页-子页面3</router-link>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import router from '@/router'
export default {
  name: 'HomeView',
  components: {},
  methods: {
    btnUseRouter() {
      // this.$router和router本身就是一个东西
      router.push({
        path: '/about'
      })
    },
    btnToAbout() {
      // this.$router.push("/about?a=1&b=2")
      this.$router.push({
        path: '/about',
        query: {
          a: 1,
          b: 2,
          c: 3,
          d: 4
        }
      })
    },
    btnToAbout2() {
      // this.$router.push("/about/123")
      this.$router.push({
        // path: '/about',
        name: 'about',
        params: {
          name: '456'
        }
      })
    }
  }
}
</script>
