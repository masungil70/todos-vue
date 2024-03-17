<!-- header UI를 구성함 -->
<!-- 오늘의 날짜 출력 -->
<template>
  <header>
    <hgroup>
      <h1>나의 할일</h1>
      <em>{{ today }}</em>
    </hgroup>
  </header>
</template>

<script setup>
import { ref } from "vue";
//오늘의 날짜를 얻는다
//예) Date().toISOString()의 결과 2024-03-17T13:32:25.953Z 이와 같이 출력됨
//이 문자열에서 년-월-일 만 추출함
const today = ref(new Date().toISOString().substring(0, 10));
</script>

<style scoped>
</style>