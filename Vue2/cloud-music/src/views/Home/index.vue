<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row gutter="5">
      <van-col span="8" v-for="item of recommendList" :key="item.id">
        <van-image width="100%" height="3rem" fit="cover" :src="item.picUrl" />
        <p class="song_name">{{ item.name }}</p>
      </van-col>
    </van-row>
    <p class="title">最新音乐</p>
    <!-- <van-cell
      center
      :title="item.name"
      :label="`${item.song.artists[0].name} - ${item.name}`"
      icon="music-o"
      v-for="item of newList"
      :key="item.id"
    >
      <template #right-icon>
        <van-icon name="play-circle-o" size="0.6rem" />
      </template>
    </van-cell> -->
    <song-item v-for="item of newList" :key="item.id" :name="item.name" :author="item.song.artists[0].name"
      :id="item.id"></song-item>
  </div>
</template>

<script>
import { recommendMusicAPI, newMusicAPI } from '@/api'
import SongItem from '@/components/SongItem.vue'
export default {
  components: {
    SongItem
  },
  name: 'HomePage',
  data() {
    return {
      recommendList: [],
      newList: []
    }
  },
  created() {
    this.getRecommendMusic()
    this.getNewSong()
  },
  methods: {
    async getRecommendMusic() {
      const {
        data: { result }
      } = await recommendMusicAPI({ limit: 6 })
      this.recommendList = result
    },
    async getNewSong() {
      const {
        data: { result }
      } = await newMusicAPI({ limit: 20 })
      this.newList = result
    }
  }
}
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}

/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical;
  /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2;
  /** 显示的行数 **/
  overflow: hidden;
  /** 隐藏超出的内容 **/
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}

.van-icon-music-o {
  margin-right: 12px;
}
</style>
