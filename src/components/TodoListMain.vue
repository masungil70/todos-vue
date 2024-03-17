<template>
  <TodoListMenu />
  <TodoList />
  <section>
    <div>
      <span class="float-start" style="color: red">▶</span>
      <strong class="float-start">처리하지 못한 작업들</strong>
    </div>
  </section>
  <TodoList />
</template>

<script setup>
import TodoListMenu from "./TodoListMenu.vue";
import TodoList from "./TodoList.vue";
</script>

<style lang="scss" scoped>
</style>