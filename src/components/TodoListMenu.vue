<template>
  <section>
    <div class="row">
      <div class="col">
        <span class="float-start" style="color: blue">▶</span>
        <strong class="float-start">{{ selectTitle }}</strong>
      </div>
      <div class="col">
        <div class="btn-group float-end">
          <button
            class="btn btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            리스트 필터
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li v-for="(title, idx) in filters" :key="idx">
              <a class="dropdown-item" @click="onFilterChange(idx)">{{
                title
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

//메뉴선택(필터변경)에 대한 이벤트 선언
const emits = defineEmits(["onFilterChange"]);

const filters = [
  "해야 할 작업들",
  "완료한 작업들",
  "오늘의 모든 기록",
  "모든 작업",
];

const selectTitle = ref(filters[0]);

const onFilterChange = (idx) => {
  console.log("idx", idx);
  selectTitle.value = filters[idx];
  emits("onFilterChange", idx);
};
</script>

<style lang="scss" scoped>
</style>