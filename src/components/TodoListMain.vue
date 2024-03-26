<template>
  <TodoListMenu @onFilterChange="onFilterChange" />
  <TodoList :todoList="filterTodoList" @onTodoItemStatus="onTodoItemStatus"/>
  <section>
    <div>
      <span class="float-start" style="color: red">▶</span>
      <strong class="float-start">처리하지 못한 작업들</strong>
    </div>
  </section>
  <TodoList :todoList="pendingList()" @onTodoItemStatus="onTodoItemStatus" />
</template>

<script setup>
import TodoListMenu from "./TodoListMenu.vue";
import TodoList from "./TodoList.vue";

//props선언
const { todoList, filterTodoList } = defineProps([
  "todoList",
  "filterTodoList",
]);
//메뉴선택(필터변경)에 대한 이벤트 선언
const emits = defineEmits(["onFilterChange", "onTodoItemStatus"]);

//처리하지 못한 작업들
const pendingList = () => {
  return todoList.filter((item) => item.completed == false);
};

//filter 변경 이벤트 핸들러
const onFilterChange = (type) => emits("onFilterChange", type);

const onTodoItemStatus = (status) => {
  //부모로 이벤트를 처리할 수 있게 전달하다
  console.log("TodoListMain.onTodoItemStatus", status);
  emits('onTodoItemStatus', status);
}

</script>

<style lang="scss" scoped>
</style>