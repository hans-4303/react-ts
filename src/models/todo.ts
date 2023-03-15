/* 세 가지 생성 방법
1) type
2) interface
3) class */

/* 이때 자바스크립트에서 class를 작성하는 것과 차이점을 갖는다
props나 추가할 속성이 있을 경우 constructor()를 통해 생성할 필요가 없다
대신 중괄호 안에서 작성할 수 있다 => C# 문법과 유사 */

/* 그런데 에러가 발생, id와 text를 초기화 하는 부분이 없고, 생성자에서 값이 할당되지 않는다
이 클래스가 인스턴스화 되어야 한다는 것을 의미

생성자와 인수를 대입해서 해결해보려 함 */
class Todo {
  id: string;
  text: string | undefined;

  /* todoText라는 파라미터를 만듦, ID는 생성자 안에서 동적으로 생성할 것임
  그래서 Todo("todoText")를 호출하면 text에 todoText 값이 대입, id는 자동으로 생성 */
  constructor(todoText: string | undefined) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;