<template>
  <h1>
    HomeA
    <h1>{{ name }}</h1>
    <van-input v-model="name"></van-input>
    <!-- <sync-child :abc.sync="name"></sync-child> -->
  </h1>
</template>

<script>
import VanInput from '@/components/VanInput.vue'
// import SyncChild from '@/components/SyncChild.vue'
export default {
  components: {
    VanInput
    // SyncChild
  },
  data() {
    return {
      name: '张三'
    }
  }
}
</script>

<style>
</style>