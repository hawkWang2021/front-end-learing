<template>
  <div>
    <van-cell center icon="music-o" :title="name" :label="author + ' - ' + name">
      <template #right-icon>
        <van-icon name="play-circle-o" size="0.6rem" @click="playMusic" />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    name: String, // 歌曲名
    author: String, // 作者
    id: Number // 歌曲id (标记这首歌曲-为将来跳转播放页做准备)
  },
  methods: {
    playMusic() {
      this.$router.push({
        path: '/play',
        query: {
          id: this.id
        }
      })
    }
  }
}
</script>

<style scoped>
.van-cell {
  border-bottom: 1px solid lightgray;
}

.van-icon-music-o {
  margin-right: 12px;
}
</style>
