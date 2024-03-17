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

const props = defineProps(["todoList"]);
</script>

<style lang="scss" scoped>
</style>