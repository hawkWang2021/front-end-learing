<template>
  <div class="home">
    <van-image :src="defaultImg"></van-image>
    <van-button @click="logout" type="warning">退出登录</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import defaultImg from '@/assets/真的狗.jpg'
import { Dialog } from 'vant'
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      defaultImg,
      show: false,
      actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]
    }
  },
  methods: {
    logout() {
      Dialog.confirm({
        title: '提示',
        message: '您确认要离开我了吗'
      }).then(() => {
        localStorage.removeItem('token')
        this.$router.push('/login')
      })
    }
  }
}
</script>
