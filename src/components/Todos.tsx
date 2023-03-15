/* useContext Hook 사용 */
import React, { useContext } from "react";

import TodoComp from "./TodoComp";
/* 이때 Provider 컴포넌트를 받아온 것은 아님 */
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  /* 이때 반환된 값은 자동적으로 컨텍스트의 타입이 지정됨 */
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item, index) => (
        /* todosCtx에서 onRemoveTodo 메서드를 가져올 것을 뜻함
        이때 bind 메서드를 호출, 새로운 함수를 생성해줄 수 있다. */
        <TodoComp
          key={index}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        ></TodoComp>
      ))}
    </ul>
  );
};

export default Todos;
