<template>
  <TodoListNew :today="today" @onAddTodoItem="onAddTodoItem" />
  <TodoListMain
    :todoList="todoList"
    :filterTodoList="filterTodoList"
    @onFilterChange="onFilterChange"
    @onTodoItemStatus="onTodoItemStatus"
  />
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

//전체 작업들에 대한 목록 배열
const todoList = ref(loadTodoList());
const filterTodoList = ref([]);
const filterType = ref(0);

//할일을 등록하는 함수
const addTodoItem = (title, date) => {
  todoList.value.push({
    id: nextTodoId(),
    title: title,
    date: date,
    completed: false,
  });

  //메뉴 선택에 의한 검색 결과를 재 설정한다
  setFilterTodoList();
  //로컬 저장소에 저장한다
  //saveTodoList(todoList);
};

//할일 ID을 찾아 삭제한다
const removeTodoItem = (id) => {
  todoList.value = todoList.value.filter((todoItem) => todoItem.id != id);

  //메뉴 선택에 의한 검색 결과를 재 설정한다
  setFilterTodoList();
  
  //로컬 저장소에 저장한다
  saveTodoList(todoList);
};

//할일 이벤트 핸들러
const onAddTodoItem = (todoItem) => {
  addTodoItem(todoItem.title, todoItem.date);
};

//
const onTodoItemStatus = (status) =>
{
  console.log("TodoListContainer.onTodoItemStatus", status);
  switch (status.status) {
    case 'delete':
      //전달 받은 todo항목을 삭제한다
      removeTodoItem(status.id);
      break;
    case 'complated':
      //전달 받은 todo항목을 완료 상태로 설정한다
      todoList.value.find(todoItem => todoItem.id == status.id).completed = true;
      break;
  }
}
//소트관련 함수 선언
const dateSort = (a, b) => {
  const a_date = Date.parse(a.date);
  const b_date = Date.parse(b.date);
  if (a_date > b_date) return 1;
  else if (a_date < b_date) return 0;
  else return a.id - b.id;
};

//"오늘 해야 할 작업들"
const getActiveTodayTodos = (todoList) => {
  const result = todoList.value.filter(
    (todoItem) => todoItem.date == today && !todoItem.completed
  ).sort(dateSort);
  console.log("getActiveTodayTodos->", result);
  return [...result];
};

//"오늘 완료한 작업들"
const getCompletedTodayTodos = (todoList) => {
  return todoList.value
    .filter((todoItem) => todoItem.date == today && todoItem.completed)
    .sort(dateSort);
};

//"오늘의 모든 기록"
const getAllTodayTodos = (todoList) => {
  return todoList.value
    .filter((todoItem) => todoItem.date == today)
    .sort(dateSort);
};

//"모든 작업"
const getAllTodos = (todoList) => {
  return todoList.value.slice().sort(dateSort);
};

//filter 변경 이벤트 핸들러
const onFilterChange = (type) => {
  filterType.value = type;
  setFilterTodoList();
};

const setFilterTodoList = () => {
  switch (filterType.value) {
    case 0: //"오늘 해야 할 작업들"
      filterTodoList.value = getActiveTodayTodos(todoList);
      break;
    case 1: //"오늘 완료한 작업들"
      filterTodoList.value = getCompletedTodayTodos(todoList);
      break;
    case 2: //"오늘의 모든 기록"
      filterTodoList.value = getAllTodayTodos(todoList);
      break;
    case 3: //"모든 작업"
      filterTodoList.value = getAllTodos(todoList);
      break;
  }
  console.log("filterTodoList", filterTodoList.value);

}
//테스트 코드 : 나중에 삭제할 예정
//sample 데이터 추가
if (todoList.value.length == 0) {
  addTodoItem("오늘 할일 제목1", "2024-03-26");
  addTodoItem("오늘 할일 제목2", "2024-03-26");
  addTodoItem("오늘 할일 제목3", "2024-03-26");
  addTodoItem("오늘 할일 제목4", "2024-03-17");
  addTodoItem("오늘 할일 제목11", "2024-03-17");
  addTodoItem("오늘 할일 제목12", "2024-03-17");
  addTodoItem("오늘 할일 제목13", "2024-03-17");

  //테스트 코드 : 나중에 삭제할 예정
  //sample 데이터 3삭제 후 화면에 3이 나오지 않으면 됨
  removeTodoItem(3);
}

//오늘 할일 목록을 설정한다
//filterTodoList.value = getActiveTodayTodos(todoList);
console.log("초기시 ", filterTodoList.value);
</script>

<style  scoped>
</style>