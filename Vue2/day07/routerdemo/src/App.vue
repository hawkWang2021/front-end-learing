<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link> |
      <!-- query形式 ?属性名=值 -->
      <router-link to="/about?money=100&price=50">About</router-link>
      |
      <router-link to="/about/张三">动态路由传参数</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
