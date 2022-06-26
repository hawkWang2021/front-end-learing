<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="obj of list" :key="obj.id">
            <td>{{ obj.id }}</td>
            <td>{{ obj.name }}</td>
            <!-- 如果价格超过100，就有 red 这个类 -->
            <td :class="{ red: obj.price > 100 }">
              {{ obj.price | priceFilter | prevPriceFilter }}
            </td>
            <td>{{ obj.time | dateFilter }}</td>
            <td><a href="#" @click.prevent="delBtn(obj.id)">删除</a></td>
          </tr>
        </tbody>
        <!--
        <tfoot >
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
            -->
      </table>
      <!-- 添加资产 -->
      <form class="form-inline" style="display: flex">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model.trim="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model.number="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addBtn">
          添加资产
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '', // 名称
      price: 0, // 价格
      list: [
        { id: 100, name: '外套', price: 199, time: new Date('2010-08-12') },
        { id: 101, name: '裤子', price: 34, time: new Date('2013-09-01') },
        { id: 102, name: '鞋', price: 25.4, time: new Date('2018-11-22') },
        { id: 103, name: '头发', price: 19900, time: new Date('2020-12-12') }
      ]
    }
  },
  methods: {
    addBtn() {
      if (this.name && this.price) {
        const id = ~~(Math.random() * 1000)
        this.list.push({
          id,
          name: this.name,
          price: this.price,
          time: new Date()
        })
      }
      // 清空数据
      this.name = ''
      this.price = 0
    },
    delBtn(id) {
      if (id && confirm('确定要删除吗？')) {
        // 第一种写法
        // 判断id是否存在
        // splice 删除某个元素
        // let index = this.list.findIndex((item) => {
        //   return item.id === id
        // })
        // this.list.splice(index, 1)
        // 第二种写法
        this.list = this.list.filter((item) => {
          return item.id !== id
        })
      }
    }
  },
  filters: {
    priceFilter(value) {
      return value + '$'
    },
    prevPriceFilter(value) {
      return '跳楼价' + value
    },
    dateFilter(value) {
      console.log(value)
      return value.toLocalString()
    }
  }
}
</script>

<style >
.red {
  color: red;
}
</style>
