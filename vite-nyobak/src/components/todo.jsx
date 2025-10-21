import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div>
      <div className="flex justify-center items-center flex-col m-10 p-6 gap-7">
        <h1>TodoList</h1>
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="KONTOL..."
            maxLength={30}
          />
          <button
            className="cursor-pointer bg-amber-600 p-1 rounded-b-sm"
            type="submit"
          >
            ADD
          </button>
        </form>

        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="my-2 p-2 border flex justify-between items-center
              gap-2"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="cursor-pointer"
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white p-1 rounded text-xs"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
