<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>头像</th>
        </tr>
      </thead>
      <thead>
        <tr v-for="(obj, index) of arr" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ obj.name }}</td>
          <td>{{ obj.age }}</td>
          <td>
            <slot :row="obj">{{ obj.headImgUrl }} </slot>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    arr: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
</style>