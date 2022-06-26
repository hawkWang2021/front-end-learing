// ? 目标:

// * 需求1: 铺设页面, 准备初始的数据(自己手写数据结构) - 前面是数组索引+1 *作为序号
// * 需求2: 当输入框没有值, 要给用户一个提示, 必须都有值才能增加新数据 (数据驱动页面哦)
// * 需求3: 添加功能 - 想好数据结构统一对象的key
// * 需求4: 点击编辑功能, 把值赋予到输入框上(不要操作dom, 数据驱动页面)
// * 需求5: 用户修改后, 点击相同按钮 - 想想怎么判断怎么是添加还是修改的功能 (提示: 准备一个全局变量, 点过编辑按钮可以让它为true) - 实现编辑后更新页面效果
// * 需求6: 点击删除, 删除这行数据
<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.number="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="gender">
        <option value="男" selected="selected">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="updateItem(state)">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item of list" :key="item.id">
          <td>{{ item.id + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
          <td>
            <button @click="delItem(item.id)">删除</button>
            <button @click="editItem(item.id)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      name: '',
      age: '',
      gender: '',
      state: false
    }
  },
  created() {
    this.list = JSON.parse(localStorage.getItem('list')) || []
  },
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem('list', JSON.stringify(this.list))
      }
    }
  },
  methods: {
    updateItem(state) {
      if (this.name === '' || this.age === '' || this.gender === '')
        return alert('提交的信息不能为空')
      if (!state) {
        // state = false,说明是增加数据
        this.list.push({
          id: ~~(Math.random() * 1000),
          name: this.name,
          age: this.age,
          gender: this.gender
        })
      } else {
        // ? 修改数据
        this.item.name = this.name
        this.item.age = this.age
        this.item.gender = this.gender
        this.status = false
      }
      (this.name = ''), (this.age = ''), (this.gender = '')
    },
    delItem(id) {
      this.list = this.list.filter((elem) => id !== elem.id)
    },
    editItem(id) {
      this.item = this.list.find((elem) => id === elem.id)
      this.name = this.item.name
      this.age = this.item.age
      this.gender = this.item.gender
      this.state = true
    }
  }
}
</script>
<style scoped>
#app {
  margin-left: 20px;
}
td {
  border: 1px solid #333;
}
button {
  border: none;
  margin-right: 5px;
}
</style>