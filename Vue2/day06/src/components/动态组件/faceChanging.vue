<template>
  <div id="app">
    <button @click="changeCompId">变脸</button>
    <component :is="componentId"></component>
  </div>
</template>
<script>
import ComFace01 from './ComFace01.vue'
import ComFace02 from './ComFace02.vue'
import ComFace03 from './ComFace03.vue'
import ComFace04 from './ComFace04.vue'
export default {
  name: 'App',
  data() {
    return {
      componentId: ''
    }
  },
  components: {
    ComFace01,
    ComFace02,
    ComFace03,
    ComFace04
  },
  methods: {
    changeCompId() {
      this.componentId = `ComFace0${~~(Math.random() * 4) + 1}`
    }
  }
}
</script>

<style>
</style>
