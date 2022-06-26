<template>
  <div id="app">test keep-alive</div>
</template>

<script>
export default {
  created() {
    console.log('created...')
  },
  beforeDestroy() {
    console.log('destroy...')
  },
  activated() {
    console.log('activated...')
  },
  deactivated() {
    console.log('deactivated...')
  }
}
</script>

<style scoped>
#app {
  border: 1px solid red;
  background-color: greenyellow;
}
</style>