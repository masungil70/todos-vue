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

//전체 작업들
const todoList = ref([
  { id: 1, date: "2024-03-17", title: "오늘 할일 제목1", completed: true },
  { id: 2, date: "2024-03-17", title: "오늘 할일 제목2", completed: true },
  { id: 3, date: "2024-03-17", title: "오늘 할일 제목3", completed: true },
  { id: 4, date: "2024-03-17", title: "오늘 할일 제목4", completed: true },
  { id: 11, date: "2024-03-17", title: "오늘 할일 제목11", completed: false },
  { id: 12, date: "2024-03-17", title: "오늘 할일 제목12", completed: false },
  { id: 13, date: "2024-03-17", title: "오늘 할일 제목13", completed: false },
]);

//처리하지 못한 작업들
const pendingList = () => {
  return todoList.value.filter((item) => item.completed == false);
};
</script>

<style lang="scss" scoped>
</style>