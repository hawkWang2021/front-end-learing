<template>
  <div id="app">
    <my-header :title="title"></my-header>
    <div class="main">
      <component :is="comName"></component>
    </div>
    <my-tab-bar :arr="tabList" @updateComName="updateComName"></my-tab-bar>
  </div>
</template>
<script>
import MyHeader from '@/components/MyHeader.vue'
import MyTabBar from '@/components/MyTabBar.vue'
import MyGoodsList from '@/views/MyGoodsList.vue'
import MyGoodsSearch from '@/views/MyGoodsSearch.vue'
import MyUserInfo from '@/views/MyUserInfo.vue'
export default {
  data() {
    return {
      comName: 'MyGoodsList',
      title: 'tabbar案例',
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList'
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch'
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo'
        }
      ]
    }
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
  },
  methods: {
    updateComName(comName) {
      this.comName = comName
    }
  }
}
</script>
<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 51px;
}
</style>
