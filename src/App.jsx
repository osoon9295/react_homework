import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const inputvalue = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      return alert("내용을 입력해주세요");
    }

    const newTodo = {
      id: uuid(),
      text: input,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteHandler = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const changeHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">할일 :</label>
        <input type="text" name="input" onChange={inputvalue} value={input} />
        <button type="submit">할일 추가하기</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.isDone === true ? "line-through" : "none",
              }}
            >
              {todo.text}
              <button onClick={() => changeHandler(todo.id)}>
                {todo.isDone === true ? "취소" : "완료"}
              </button>
              <button onClick={() => deleteHandler(todo.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
