import React, { useState } from "react";
import Todo from "../models/todo";

/* 타입 별칭을 생성 */
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string | undefined) => void;
  removeTodo: (id: string) => void;
};

/* Context 생성

어떤 타입의 자료를 다룰지 확실하지 않은 문제 발생
제네릭으로 정의해서 해결 */

/* TodosContext 내보내기 */
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

/* contextProvider 작성

state, setter 및 메서드를 전부 작성 */

/* props와 children에 대해 문제가 발생하였음

이때 props는 any로 두되, 제네릭을 통해서
<{children: React.ReactNode}>라고 작성해서 문제를 해결

단, React.FC라고 타입을 선언하고 props를 적는다면
children은 자동으로 제공될 것이라던 설명과 다른 점이 발생

이유는 아직 잘 모름 */
const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props: any
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string | undefined) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  /* 이 객체에서도 어떤 타입의 데이터를 받을 건지 정의가 필요
  추론한 타입이 아니라 명시된 타입을 사용하도록 만들어주기 */
  const contextValue: TodosContextObj = {
    items: todos,
    /* 그런데 이때도 에러가 발생, 타입 정의를 돌려 쓰는 게 답이 아닌 상황
    타입 별칭(TodosContextObj)를 통해 해결하려고 하였음
    
    이때 TodosContextObj 안에서 뭔가를 해결해야 하는 상황.. */
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };

  /* 막상 value는 잘 작성된 게 아니게 됨
  
  Context에 정의할 때는 파라미터를 정의하지 않았고
  Provider 안에서는 파라미터를 정의했기 때문 */
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

/* Provider 내보내기 */
export default TodosContextProvider;
