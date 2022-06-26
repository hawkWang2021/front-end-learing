<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of goodList" :key="index">
          <td><input type="checkbox" /></td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td><button>-</button> {{ item.num }} <button>+</button></td>
          <td>{{ item.num * item.price }}</td>
          <td><button>删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">{{ allPrice }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodList: [
        {
          name: '诸葛亮',
          price: 1000,
          num: 1,
          checked: false
        },
        {
          name: '蔡文姬',
          price: 1500,
          num: 1,
          checked: false
        },
        {
          name: '妲己',
          price: 2000,
          num: 1,
          checked: false
        },
        {
          name: '鲁班',
          price: 2200,
          num: 1,
          checked: false
        }
      ]
    }
  },
  computed: {
    allPrice() {
      return 0
    }
  }
}
</script>

<style scoped>
* {
  text-align: center;
}
</style>