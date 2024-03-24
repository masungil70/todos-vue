<template>
  <TodoListMenu @onFilterChange="onFilterChange" />
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

//props선언
const props = defineProps(["todoList"]);
const todoList = ref(props.todoList);
//메뉴선택(필터변경)에 대한 이벤트 선언
const emits = defineEmits(["onFilterChange"]);

//처리하지 못한 작업들
const pendingList = () => {
  return todoList.value.filter((item) => item.completed == false);
};

//filter 변경 이벤트 핸들러
const onFilterChange = (type) => emits("onFilterChange", type);
</script>

<style lang="scss" scoped>
</style>