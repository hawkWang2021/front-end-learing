// # 数组变更方法, 就会导致v-for更新, 页面更新
// # 数组非变更方法, 返回新数组, 就不会导致v-for更新, 可采用覆盖数组或this.$set()
// ! 这些方法会触发数组改变, v-for会监测到并更新页面

// - `push()`
// - `pop()`
// - `shift()`
// - `unshift()`
// - `splice()`
// - `sort()`
// - `reverse()`

// !这些方法不会触发v-for更新

// * `slice()`
// * `filter()`
// * `concat()`

// 另：课上补充两种方法实现数组的更新-导致页面的刷新
// 1. this.list = [value, ...this.list]
// 2. this.list[0] = value // 不会造成更新
      this.$forceUpdate() // 加上这句强制数据更新
<template>
  <div>
    <button @click="revBtn">数组翻转</button><br />
    <button @click="sliceBtn">截取前三个</button><br />
    <button @click="updateBtn">更新第一个元素值</button><br />
    <button @click="addBtn">添加一个元素</button>
    <ul>
      <li v-for="(item, index) of arr" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [5, 3, 9, 2, 1]
    }
  },
  methods: {
    revBtn() {
      // 1. 数组翻转可以让v-for更新
      this.arr.reverse()
    },
    sliceBtn() {
      // 2. 数组slice方法不会造成v-for更新
      // slice不会改变原始数组
      // this.arr.slice(0, 3)
      // ? 解决v-for更新 - 覆盖原始数组
      let newArr = this.arr.slice(0, 3)
      this.arr = newArr
    },
    updateBtn() {
      // 3. 更新某个值的时候, v-for是监测不到的
      // //this.arr[0] = 1000 //直接赋值是不行的
      // #方法一：使用 this.$set()
      // 参数1: 更新目标结构
      // 参数2: 更新位置
      // 参数3: 更新值
      // this.$set(this.arr, 0, 1000)
      // #方法二：使用强制更新
      // this.arr[0] = 1000
      // this.$forceUpdate()
      // #方法三：使用 splice() 删除并添加元素实现更新功能
      this.arr.splice(0, 1, ~~(Math.random() * 1000))
    },
    addBtn() {
      // * ~~ 是 Math.floor 的语法糖
      // #方法一：使用 数组方法 .push()
      // this.arr.push(~~(Math.random() * 1000))
      // #方法二：让 arr 数组赋新值
      this.arr = [...this.arr, ~~(Math.random() * 1000)]
    }
  }
}
</script>
<style>
</style>