<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ lastLength }}</strong> item left
    </span>
    <ul class="filters">
      <li>
        <a
          @click.prevent="$emit('updateStatus', 'all')"
          :class="{ selected: status === 'all' }"
          href="#/"
          >All</a
        >
      </li>
      <li>
        <a
          @click.prevent="$emit('updateStatus', 'active')"
          :class="{ selected: status === 'active' }"
          href="#/active"
          >Active</a
        >
      </li>
      <li>
        <a
          @click.prevent="$emit('updateStatus', 'completed')"
          :class="{ selected: status === 'completed' }"
          href="#/completed"
          >Completed</a
        >
      </li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>

<script>
export default {
  props: ['lastLength', 'status']
}
</script>

<style scoped>
</style>