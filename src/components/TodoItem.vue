<!-- 오늘 할일에 대한 것을 객체로 출력할 수 있게 수정-->
<template>
  <div>
    <div class="input-group input-group-sm">
      <div class="input-group-text">
        <input class="form-check-input" type="checkbox" />
      </div>
      <div class="input-group-text">
        <input
          class="form-input mt-0"
          type="date"
          disabled="disabled"
          :value="todoItem.date"
        />
      </div>
      <input type="text" class="form-control" :value="todoItem.title" />
      <button
        class="btn btn-outline-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        할일 관리
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item">할일 삭제</a></li>
        <li><a class="dropdown-item">할일 완료</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
//오늘에 할일 객체를 생성한다
const todoItem = ref({ id: 1, date: "2024-03-17", title: "오늘 할일 제목1" });
</script>

<style lang="scss" scoped>
</style>