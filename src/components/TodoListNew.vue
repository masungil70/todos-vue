/*
TodoList에 등록할 항목 UI
 */
<template>
  <section>
    <div>
      <div class="col border border-primary rounded">
        <input
          type="text"
          class="form-control"
          placeholder="여기에 할일을 적으세요"
          v-model="title"
          ref="titleRef"
        />
        <div class="row">
          <div class="col-6">
            <input
              type="date"
              class="float-start"
              :min="today"
              v-model="date"
              ref="dateRef"
            />
          </div>
          <div class="col-6">
            <button
              type="button"
              class="btn btn-primary btn-sm float-end"
              @click="onClick"
            >
              작업추가
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
//입력상자 입력하지 않을 경우 입력포커스를 위해 참조변수 선언
const titleRef = ref();
const dateRef = ref();
//제목과 일정 변수를 선언한다
const title = ref("");
const date = ref("");

const { today } = defineProps(["today"]);

//부모로 이벤트를 전송하기 위한 이벤트 선언
const emits = defineEmits(["onAddTodoItem"]);

//작업추가 버튼 클릭시 처리기능 구현
const onClick = (e) => {
  //입력값 검증 하기
  if (title.value == "") {
    alert("제목은 필수 입력입니다");
    titleRef.value.focus();
  }
  if (date.value == "") {
    alert("일정을 필수 입력입니다");
    dateRef.value.focus();
  }
  //이벤트 전달이 전달할 정보(할일정보)
  const todoItem = { title: title.value, date: date.value };
  console.log("todoItem", todoItem);
  //부모에게 이벤트를 발생한다
  emits("onAddTodoItem", todoItem);
};
</script>

<style lang="scss" scoped>
</style>