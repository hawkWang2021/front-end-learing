<template>
  <div>
    <span v-for="(item, index) of likes" :key="index">
      <input type="checkbox" :value="item" v-model="yourLikes" />
      {{ item }}
    </span>
    <ul>
      <li v-for="(item, index) of yourLikes" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      likes: ['科幻', '喜剧', '动漫', '冒险', '科技', '军事', '娱乐', '奇闻'],
      yourLikes: []
    }
  }
}
</script>
<style>
</style>