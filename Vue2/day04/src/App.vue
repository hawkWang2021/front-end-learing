<template>
  <div id="app">
    <child-a></child-a>
    <child-b></child-b>
  </div>
</template>

<script>
import ChildA from './components/ChiildA.vue'
import ChildB from './components/ChiildB.vue'
export default {
  components: {
    ChildA,
    ChildB
  }
}
</script>

<style scoped>
#app {
  display: flex;
  justify-content: space-around;
}
</style>