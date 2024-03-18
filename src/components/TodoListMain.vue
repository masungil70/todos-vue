<template>
  <TodoListMenu />
  <TodoList :todoList="todoList" />
  <section>
    <div>
      <span class="float-start" style="color: red">▶</span>
      <strong class="float-start">처리하지 못한 작업들</strong>
    </div>
  </section>
  <TodoList :todoList="pendingList()" />
</template>

<script setup>
import TodoListMenu from "./TodoListMenu.vue";
import TodoList from "./TodoList.vue";
import { ref } from "vue";

const props = defineProps(["todoList"]);
const todoList = ref(props.todoList);

//처리하지 못한 작업들
const pendingList = () => {
  return todoList.value.filter((item) => item.completed == false);
};

</script>

<style lang="scss" scoped>
</style>