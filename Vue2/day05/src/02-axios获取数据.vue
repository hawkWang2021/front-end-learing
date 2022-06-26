<template>
  <div id="app">
    <ul>
      <li v-for="item of channels" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      channels: []
    }
  },
  created() {
    this.getChannels()
  },
  methods: {
    getChannels() {
      axios({
        // method: 'get',
        url: 'http://toutiao.itheima.net/v1_0/channels'
      }).then(({ data }) => {
        this.channels = data.data.channels
      })
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul li {
  list-style: none;
  width: 80px;
  text-align: center;
}
ul {
  display: flex;
  flex-direction: row;
}
</style>
