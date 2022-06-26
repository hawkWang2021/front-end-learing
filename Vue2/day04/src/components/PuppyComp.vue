<template>
  <div id="dog">
    <img :src="imgurl" alt="" />
    <p @click="btn" :style="{ backgroundColor: colorStr }">
      {{ dogname }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['imgurl', 'dogname'],
  name: 'PuppyComp',
  data() {
    return {
      colorStr: ''
    }
  },
  methods: {
    btn() {
      this.colorStr = `rgb(${~~(Math.random() * 256)},
      ${~~(Math.random() * 256)},
      ${~~(Math.random() * 256)})`
      this.$emit('like', this.dogname)
    }
  }
}
</script>

<style scoped>
#dog {
  display: block;
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}
img {
  width: 100%;
  height: 200px;
}
</style>