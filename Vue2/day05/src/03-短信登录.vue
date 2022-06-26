<template>
  <div>
    <!-- 登录页面结构 -->
    <h1>短信登录</h1>
    <div class="form_item">
      <input
        class="input_item"
        type="text"
        placeholder="请输入手机号"
        v-model.trim="mobile"
      />
    </div>
    <div class="form_item">
      <input
        class="input_item code"
        type="text"
        placeholder="请输入短信验证码"
        v-model.trim="code"
      />
      <span class="send_code" @click="sendCode">{{
        timerCount > 0 ? timerCount : '发送验证码'
      }}</span>
    </div>
    <div class="form_item">
      <button class="btn_login" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'https://toutiao.itheima.net'
export default {
  name: 'LoginCom',
  data() {
    return {
      mobile: '13805959260',
      code: '246810',
      timerCount: 0 // 默认值为0
    }
  },
  methods: {
    login() {
      const mobileReg = /^1[3-9]\d{9}$/
      const codeReg = /^\d{6}$/
      if (mobileReg.test(this.mobile) && codeReg.test(this.code)) {
        axios
          .post('/v1_0/authorizations', {
            mobile: this.mobile,
            code: this.code
          })
          .then(() => {
            alert('用户登录成功')
          })
          .catch(() => {
            alert('用户的手机号或者验证码错误')
          })
      } else {
        alert('手机号或者验证码格式不正确')
      }
    },
    sendCode() {
      // 判断当前的时间 > 0 不能发
      const mobileReg = /^1[3-9]\d{9}$/
      if (this.timerCount === 0 && mobileReg.test(this.mobile)) {
        // 只有在等于0 的情况下，并且手机号符合规范的情况下才能 才能发送验证码
        axios
          .get(`/v1_0/sms/codes/${this.mobile}`)
          .then(() => {
            alert('获取验证码成功')
          })
          .catch((err) => {
            alert(err.msg)
          })
        // 记录标记
        this.timerCount = 60
        this.timer = setInterval(() => {
          if (this.timerCount === 0) {
            clearInterval(this.timer)
          } else {
            this.timerCount--
          }
        }, 1000)
      }
    }
  }
}
</script>

<style>
h1 {
  text-align: center;
}
.send_code {
  display: inline-block;
  width: 120px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: #999;
}
.btn_login {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: none;
  color: #fff;
  background: linear-gradient(90deg, #fe4f4f, #fc6627);
}
.input_item {
  height: 40px;
  width: 100%;
}
.code {
  width: 55%;
}
.form_item {
  margin: 20px;
}
</style>