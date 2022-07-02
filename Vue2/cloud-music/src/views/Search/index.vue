<template>
  <div>
    <van-search
      shape="round"
      v-model="keyWord"
      placeholder="请输入搜索关键词"
    />
    <div class="search_wrap" v-if="!keyWord.length">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <span
          v-for="(item, index) of keyList"
          :key="index"
          @click="keyWord = item.first"
          class="hot_item"
        >
          {{ item.first }}
        </span>
      </div>
    </div>
    <div class="search_wrap" v-else>
      <p class="hot_title">最佳匹配</p>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <!-- MARK: :immediate-check="false" 用于是否在初始化时立即执行滚动位置检查,默认值为 true-->
        <!-- <van-cell
          center
          :title="item.name"
          :label="item.ar[0].name"
          icon="music-o"
          v-for="item of searchList"
          :key="item.id"
        >
          <template #right-icon>
            <van-icon name="play-circle-o" size="0.6rem" />
          </template>
        </van-cell> -->
        <song-item
          v-for="(item, index) of searchList"
          :key="index"
          :name="item.name"
          :author="item.ar[0].name"
          :id="item.id"
        ></song-item>
      </van-list>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, searchResultAPI } from '@/api'
import SongItem from '@/components/SongItem.vue'
export default {
  components: {
    SongItem
  },
  name: 'SearchPage',
  created() {
    this.getHotSearch()
  },
  data() {
    return {
      keyList: [], // 热词列表
      keyWord: '',
      searchList: [], // 搜索的结果列表
      loading: false, // 初始值必须为 false,只有在 false 的情况下,才会触发加载事件
      finished: false,
      page: 1 // 页码
    }
  },
  watch: {
    keyWord(newValue) {
      this.page = 1
      this.finished = false
      this.loading = false
      // 当输入框的值为空的时候需要重置数据
      if (!newValue) {
        this.searchList.length = 0
        return
      }
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.getSearchResult(newValue)
      }, 500)
    }
  },
  methods: {
    async getHotSearch() {
      const {
        data: {
          result: { hots }
        }
      } = await hotSearchAPI()
      this.keyList = hots
    },
    async getSearchResult(keywords, isAppend = false) {
      // 输入框值改变
      console.log('this.page', this.page)
      const { data } = await searchResultAPI({
        keywords,
        limit: 20,
        offset: (this.page - 1) * 20
      })
      const { code, result } = data
      console.log(result.songs)
      if (code === 200 && result.songCount > 0) {
        if (isAppend) {
          // 追加的情况:放到后面
          this.searchList.push(...result.songs)
        } else {
          this.searchList = result.songs
        }
      } else {
        // 此时说明搜索不到数据,或者数据已经搜索完毕
        this.finished = true
      }
    },
    async onLoad() {
      console.log('咋回事呀?')
      this.page++
      await this.getSearchResult(this.keyWord, true)
      // 数据更新完毕后，需要将 loading 设置成 false
      this.loading = false // 数据加载完毕-保证下一次还能触发onload
    }
  }
}
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

.van-icon-music-o {
  margin-right: 12px;
}
</style>
