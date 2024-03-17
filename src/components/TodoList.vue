<template>
  <section>
    <TodoItem />
    <div class="col border border-second"></div>
    <TodoItem />
    <div class="col border border-second" style="display: none"></div>
  </section>
</template>

<script setup>
import TodoItem from "./TodoItem.vue";
</script>

<style lang="scss" scoped>
</style>