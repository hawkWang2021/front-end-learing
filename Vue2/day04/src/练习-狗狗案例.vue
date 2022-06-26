<template>
  <div id="app">
    <puppy-comp
      v-for="(item, index) of arr"
      :key="index"
      :imgurl="item.dogImgUrl"
      :dogname="item.dogName"
      @like="addDogList"
    ></puppy-comp>
    <div>
      显示喜欢的小狗狗：
      <ul>
        <li v-for="(item, index) of likes" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import PuppyComp from '@/components/PuppyComp.vue'
export default {
  components: {
    PuppyComp
  },
  data() {
    return {
      arr: [
        {
          dogImgUrl:
            'http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg',
          dogName: '博美'
        },
        {
          dogImgUrl:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp440739692.jpg&refer=http%3A%2F%2Fimg2.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658762657&t=f4bcdb743c28271abf07a2651803a05b',
          dogName: '泰迪'
        },
        {
          dogImgUrl:
            'https://img0.baidu.com/it/u=3606307439,3326146874&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=757',
          dogName: '金毛'
        },
        {
          dogImgUrl:
            'https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c',
          dogName: '哈士奇'
        },
        {
          dogImgUrl:
            'https://img1.baidu.com/it/u=2431532229,3376215717&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=707',
          dogName: '阿拉斯加'
        },
        {
          dogImgUrl:
            'https://img1.baidu.com/it/u=2436114901,3494491281&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
          dogName: '萨摩耶'
        }
      ],
      likes: []
    }
  },
  methods: {
    addDogList(dogname) {
      this.likes.push(dogname)
    }
  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-wrap: wrap;
}
ul,
li {
  list-style: none;
}
</style>