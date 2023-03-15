import React from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      {/* 이제 NewTodo 컴포넌트의 동작으로 todos 배열이 구성되길 원함 */}
      <NewTodo></NewTodo>
      <Todos></Todos>
    </div>
  );
}

export default App;
