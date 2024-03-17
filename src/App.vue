/*
원본 UI을 header와 container로 분리함 
 */
<template>
  <Header />
  <TodoListContainer />
</template>

<script setup>
import Header from "./components/Header.vue";
import TodoListContainer from "./components/TodoListContainer.vue";
</script>

<style scoped>
</style>