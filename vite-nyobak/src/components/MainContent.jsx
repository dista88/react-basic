import { useState } from "react";
function MainContent() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
    };

    setTodo([...todo, newTodo]);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };
  return (
    <main className="flex justify-center items-center flex-col mt-10  max-w-6xl mx-auto w-full gap-5">
      <div className=" flex  gap-5">
        <input
          type="text"
          placeholder="text..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-green-50 p-5 rounded-2xl cursor-pointer"
          onClick={addTodo}
        >
          ADD
        </button>
      </div>
      <div>
        <ul>
          {todo.map((t) => (
            <li key={t.id}>
              <span>{t.text}</span>
              <button
                className="bg-red-500 text-white p-1 rounded text-xs"
                onClick={() => deleteTodo(t.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default MainContent;
