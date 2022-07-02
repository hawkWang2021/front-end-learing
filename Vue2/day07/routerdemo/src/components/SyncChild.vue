<template>
  <div>
    <h3>sync修饰符的用法</h3>
    <p>接收到父组件的name: {{ abc }}</p>
    <button @click="changeName">改变Name的值</button>
  </div>
</template>

<script>
export default {
  props: ['abc'],
  methods: {
    changeName() {
      //   this.$emit("updateName","李四")
      this.$emit('update:abc', '王五')
    }
  }
}
</script>

<style>
</style>