<!-- 오늘 할일에 대한 것을 객체로 출력할 수 있게 수정-->
<!-- 오늘 할일의 상태를 변경 할 수 있게 이벤트를 등록하여 처리할 수 있게 수정 
     이벤트 발생 후 처리는 자식에서 부모로 이동할 수 있게 구현함 
     이벤트 발생 과정 
        status이 종류 'complated' : 완료 처리, 'delete' : 삭제 처리 
     1. TodoItem->onTodoItemStatus({id : id, status : 'complated'}) 
     2. TodoList->onTodoItemStatus({id : id, status : 'complated'}) 
     3. TodoListMain->onTodoItemStatus({id : id, status : 'complated'}) 
     4. TodoListContainer->onTodoItemStatus({id : id, status : 'complated'}) 

     손자에서 이벤트를 발생하여 할아버지에 처리를 전달하는 과정을 알아봄 
     다음에는 provider/inject을 사용하여 처리하는 것을 알아볼 것임 
 -->
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
        <li><a class="dropdown-item" @click="onTodoItemStatus('delete')">할일 삭제</a></li>
        <li><a class="dropdown-item" @click="onTodoItemStatus('complated')">할일 완료</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
//오늘에 할일 객체를 생성한다
//const todoItem = ref({ id: 1, date: "2024-03-17", title: "오늘 할일 제목1" });
//props로 전달받은 객체를 화면에 출력한다
const props = defineProps(["todoItem"]);

//이벤트를 정의 한다 
const emits = defineEmits(["onTodoItemStatus"]);

console.log("props.todoItem ", props.todoItem);

const onTodoItemStatus = (cmd) => {
  emits('onTodoItemStatus', {id:props.todoItem.id, status:cmd});
}
</script>

<style lang="scss" scoped>
</style>