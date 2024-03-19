import { ref } from 'vue'

export const useStorage = () => {
  //로컬 저장소에 저장시 사용될 이름 
  const KEY = 'TODOLIST-MODEL'
  const todoId = ref(0);

  const loadTodoList = () => {
    //저장소에 저장한 문자열을 json 객체로 변환 한다
    let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]')
    console.log("temp_todos", temp_todos);
    //todo id를 새롭게 구성한다
    temp_todos.forEach((todo, idx) => {
      todo.id = idx
    })

    //새로운 todo id를 얻을 때 사용할 수 있게 새롭게 id를 설정한다 
    todoId.value = temp_todos.length

    //저장소에 저장한 todoList를 리턴한다 
    return temp_todos;
  }

  //todoList를 로컬저장소에 저장한다
  const saveTodoList = (todoList) => {
    localStorage.setItem(KEY, JSON.stringify(todoList.value))
  }

  const nextTodoId = () => {
    return todoId.value++;
  }
    
  return {
    nextTodoId,
    loadTodoList,
    saveTodoList,
  }
}
