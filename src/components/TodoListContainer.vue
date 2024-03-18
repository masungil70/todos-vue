<template>
  <TodoListNew />
  <TodoListMain :todoList="todoList" />
</template>

<script setup>
import { ref } from "vue";
import TodoListNew from "./TodoListNew.vue";
import TodoListMain from "./TodoListMain.vue";

//전역 할일 아이디 변수선언(101값은 내가 임의로 선언 초기값)
const todoId = ref(101);
//다음 할일 아아디를 얻는 함수 
const nextTodoId = () => {
  return todoId.value++;
}

//전체 작업들
const todoList = ref([]);

//할일을 등록하는 함수
const addTodoItem = (title, date) => {
  todoList.value.push({
      id: nextTodoId(),
      title: title,
      date: date,
      completed: false,
  })
}

//할일 ID을 찾아 삭제한다
const removeTodoItem = (id) => {
  todoList.value = todoList.value.filter(todoItem => todoItem.id != id);
}

//테스트 코드 : 나중에 삭제할 예정 
//sample 데이터 추가
addTodoItem("오늘 할일 제목1", "2024-03-17");
addTodoItem("오늘 할일 제목2", "2024-03-17");
addTodoItem("오늘 할일 제목3", "2024-03-17");
addTodoItem("오늘 할일 제목4", "2024-03-17");
addTodoItem("오늘 할일 제목11", "2024-03-17");
addTodoItem("오늘 할일 제목12", "2024-03-17");
addTodoItem("오늘 할일 제목13", "2024-03-17");

//테스트 코드 : 나중에 삭제할 예정 
//sample 데이터 103삭제 후 화면에 103이 나오지 않으면 됨 
removeTodoItem(103);

</script>

<style  scoped>
</style>