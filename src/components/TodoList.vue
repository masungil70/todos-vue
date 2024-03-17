<!-- 배열을 사용하여 초기 데이터를 생성하고 출력한다-->
<template>
  <section>
    <div v-for="(todoItem, idx) in todoList" :key="todoItem.id">
      <TodoItem :todoItem="todoItem" />
      <div
        v-show="idx + 1 < todoList.length"
        class="col border border-second"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";

const todoList = ref([
  { id: 1, date: "2024-03-17", title: "오늘 할일 제목1" },
  { id: 2, date: "2024-03-17", title: "오늘 할일 제목2" },
  { id: 3, date: "2024-03-17", title: "오늘 할일 제목3" },
  { id: 4, date: "2024-03-17", title: "오늘 할일 제목4" },
]);
</script>

<style lang="scss" scoped>
</style>