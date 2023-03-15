import React from "react";
import classes from "./TodoComp.module.css";

/* 어떠한 작용을 한 뒤 반환 값은 없으므로 반환 값은 void
하지만 어떠한 트리거는 있으므로 파라미터 자리에 React.MouseEvent와 같이 정의할 수도 있고
인수에 어떤 값이 있거나 사용해야 하는 것은 아니라 생략도 가능 */
const TodoComp: React.FC<{
  text: string | undefined;
  onRemoveTodo: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoComp;
