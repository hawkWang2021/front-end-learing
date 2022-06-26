<template>
  <div id="app">
    <h2>1.动态组件</h2>
    <p>多个组件使用同一个挂载点，并动态切换，这就是动态组件</p>
    <face-changing></face-changing>
    <h2>2.组件缓存</h2>
    <p>组件切换会导致组件被频繁销毁和重新创建, 性能不高</p>
    <p>
      keep-alive可以提高组件的性能,内部包裹的标签不会被销毁和重新创建,触发激活和非激活的生命周期方法
      两个新的钩子函数activated()和deactivated()
    </p>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <keep-alive>
      <alive-text v-if="isShow"></alive-text>
    </keep-alive>
    <h2>3.组件插槽</h2>
    <!-- <slot></slot> 若不写 name 属性则为匿名插槽 -->
    <!-- <slot>夹着内容默认显示内容, 如果不给插槽slot传东西, 则使用<slot>夹着的内容在原地显示 -->
    <user-slot></user-slot>
    <h2>4.作用域插槽</h2>
    <user-slot1></user-slot1>
    <h2>5.作用域插槽使用案例</h2>
    <use-table></use-table>
    <h2>6.自定义指令</h2>
    <use-directive></use-directive>
  </div>
</template>

<script>
import FaceChanging from './components/动态组件/faceChanging.vue'
import AliveText from './components/组件缓存/AliveText.vue'
import UserSlot from './components/组件插槽/UserSlot.vue'
import UserSlot1 from './components/作用域插槽/UserSlot1.vue'
import UseTable from './components/作用域插槽案例/UseTable'
import UseDirective from './components/自定义指令/UseDirective.vue'
export default {
  data() {
    return {
      isShow: true
    }
  },
  components: {
    FaceChanging,
    AliveText,
    UserSlot,
    UserSlot1,
    UseTable,
    UseDirective
  }
}
</script>

<style scoped>
</style>