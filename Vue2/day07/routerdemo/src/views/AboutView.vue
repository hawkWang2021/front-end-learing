<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ $route.query }}</h2>
    <h2>{{ $route.params }}</h2>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route.query)
    console.log(this.$route.params)
  }
}
</script>