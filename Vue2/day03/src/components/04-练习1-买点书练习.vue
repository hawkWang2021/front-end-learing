<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
      <li v-for="(book, index) of arr" :key="index">
        {{ book.name }}<button @click="book.count++">买书</button>
      </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="(book, index) of arr" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ book.name }}</td>
        <td>{{ book.price }}</td>
        <td>{{ book.count }}</td>
        <td>{{ book.price * book.count }}</td>
      </tr>
    </table>
    <p>总价格为:{{ allPrice }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: '水浒传',
          price: 107,
          count: 0
        },
        {
          name: '西游记',
          price: 192,
          count: 0
        },
        {
          name: '三国演义',
          price: 219,
          count: 0
        },
        {
          name: '红楼梦',
          price: 178,
          count: 0
        }
      ]
    }
  },
  computed: {
    allPrice() {
      // ? 数组里放的是对象, 而对象是复杂类型, 引用关系, 值改变会触发计算属性重新执行
      // ! 要累加对象数组中包含的值，必须提供 initialValue，以便各个 item 正确通过你的函数。
      return this.arr.reduce((accumulator, cur) => {
        return accumulator + cur.price * cur.count
      }, 0)
    }
  }
}
</script>