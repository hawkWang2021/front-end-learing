<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll" />
    <button @click="reverseSelectBtn">反选</button>
    <ul>
      <li v-for="(item, index) of arr" :key="index">
        <input type="checkbox" v-model="item.c" />
        <span> {{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: '猪八戒',
          c: false
        },
        {
          name: '孙悟空',
          c: false
        },
        {
          name: '唐僧',
          c: false
        },
        {
          name: '白龙马',
          c: false
        }
      ]
    }
  },
  computed: {
    isAll: {
      get() {
        // every口诀: 查找数组里"不符合"条件, 直接原地返回false
        return this.arr.every((obj) => obj.c === true)
      },
      set(value) {
        return this.arr.forEach((obj) => (obj.c = value))
      }
    }
  },
  methods: {
    reverseSelectBtn() {
      this.arr.forEach((obj) => {
        obj.c = !obj.c
      })
    }
  }
}
</script>