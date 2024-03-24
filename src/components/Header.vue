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
const { today } = defineProps(["today"]);
</script>

<style scoped>
</style>