/*
원본 UI을 header와 container로 분리함 
 */
<template>
  <Header :today="today" />
  <TodoListContainer :today="today" />
</template>

<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import TodoListContainer from "./components/TodoListContainer.vue";

//오늘의 날짜를 얻는다
//예) Date().toISOString()의 결과 2024-03-17T13:32:25.953Z 이와 같이 출력됨
//이 문자열에서 년-월-일 만 추출함
//const today = ref(new Date().toISOString().substring(0, 10));
//    UTC 표준시간으로 한국(아시아/서울) 시간과는 9시간 차이가 납니다.
//    표준시간의 차이를 구한 다음 시간을 보정한다
const today = ref(
  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substring(0, 10)
);
</script>

<style scoped>
</style>