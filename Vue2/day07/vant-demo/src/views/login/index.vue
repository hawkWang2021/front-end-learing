<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="mobile"
      label="手机号"
      placeholder="手机号"
      :rules="[
        { required: true, message: '请填写手机号' },
        {
          message: '手机号的格式不正确',
          pattern: /^1[3-9]\d{9}$/ // 正则表达式
        }
      ]"
    />
    <van-field
      v-model="password"
      type="password"
      name="code"
      label="验证码"
      placeholder="验证码"
      :rules="[
        { required: true, message: '请填写密码' },
        { pattern: /^\d{6}$/, message: '验证码格式不正确' }
      ]"
    />
    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>

<script>
import axios from 'axios'
import { Notify } from 'vant'

axios.defaults.baseURL = 'http://toutiao.itheima.net'
export default {
  name: 'login-form',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit(values) {
      axios
        .post('/v1_0/authorizations', values)
        .then((result) => {
          const {
            data: {
              data: { token }
            }
          } = result
          // 拿到token  放入前端缓存
          localStorage.setItem('token', token)
          this.$router.push('/') // 实际跳的是 /home页
          Notify({
            type: 'success',
            message: '登录成功'
          })
        })
        .catch(() => {
          Notify('登录失败')
        })
    }
  }
}
</script>

<style>
</style>