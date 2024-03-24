<template>
  <TodoListNew :today="today" @onAddTodoItem="onAddTodoItem" />
  <TodoListMain :todoList="todoList" />
</template>

<script setup>
import { ref } from "vue";
import TodoListNew from "./TodoListNew.vue";
import TodoListMain from "./TodoListMain.vue";
import { useStorage } from "../model/storage";

//props에서 오늘의 날짜를 얻는다
const { today } = defineProps(["today"]);
//
const { nextTodoId, loadTodoList, saveTodoList } = useStorage();

//전체 작업들
const todoList = ref(loadTodoList());

//할일을 등록하는 함수
const addTodoItem = (title, date) => {
  todoList.value.push({
    id: nextTodoId(),
    title: title,
    date: date,
    completed: false,
  });
  //로컬 저장소에 저장한다
  //saveTodoList(todoList);
};

//할일 ID을 찾아 삭제한다
const removeTodoItem = (id) => {
  todoList.value = todoList.value.filter((todoItem) => todoItem.id != id);
  //로컬 저장소에 저장한다
  saveTodoList(todoList);
};

//할일 이벤트 핸들러
const onAddTodoItem = (todoItem) => {
  addTodoItem(todoItem.title, todoItem.date);
};

//테스트 코드 : 나중에 삭제할 예정
//sample 데이터 추가
if (todoList.value.length == 0) {
  addTodoItem("오늘 할일 제목1", "2024-03-17");
  addTodoItem("오늘 할일 제목2", "2024-03-17");
  addTodoItem("오늘 할일 제목3", "2024-03-17");
  addTodoItem("오늘 할일 제목4", "2024-03-17");
  addTodoItem("오늘 할일 제목11", "2024-03-17");
  addTodoItem("오늘 할일 제목12", "2024-03-17");
  addTodoItem("오늘 할일 제목13", "2024-03-17");

  //테스트 코드 : 나중에 삭제할 예정
  //sample 데이터 3삭제 후 화면에 3이 나오지 않으면 됨
  removeTodoItem(3);
}
</script>

<style  scoped>
</style>