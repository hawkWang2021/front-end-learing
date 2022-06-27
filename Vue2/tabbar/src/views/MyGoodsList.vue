<template>
  <div>
    <my-good-list :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="{ row }">
        <td>{{ row.id }}</td>
        <td>{{ row.goods_name }}</td>
        <td>{{ row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="row.inputVisible"
            v-focus
            @blur="row.inputVisible = false"
            @keyup.enter="enterInput($event, row)"
            @keyup.esc="$event.target.value = ''"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="row.inputVisible = true"
          >
            +Tag
          </button>

          <span
            v-for="(str, index) in row.tags"
            :key="index"
            class="badge badge-warning"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button @click="delGoods(row.id)" class="btn btn-danger btn-sm">
            删除
          </button>
        </td>
      </template>
    </my-good-list>
  </div>
</template>

<script>
import MyGoodList from '@/components/MyTable.vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
export default {
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  created() {
    this.getGoodsList()
  },
  components: {
    MyGoodList
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    getGoodsList() {
      axios.get('/goodsList').then(({ data }) => {
        this.list = data // 返回获取的数据
      })
    },
    delGoods(id) {
      if (confirm('是否确定删除该商品?')) {
        this.list = this.list.filter((item) => item.id !== id)
      }
    },
    enterInput(event, row) {
      if (event.target.value === '') {
        return alert('输入不能为空😅')
      }
      row.tags.push(event.target.value)
      event.target.value = ''
    }
  }
}
</script>

<style scoped>
</style>