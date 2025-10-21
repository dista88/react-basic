import { useState } from "react";

function test() {
  const [inputValue, setInput] = useState("");
  const [count, setCount] = useState(0);
  const items = ["Apple", "Banana", "Orange"];
  const users = [
    { id: 1, name: "bob", age: 21 },
    { id: 2, name: "john", age: 22 },
  ];

  return (
    <div className="flex justify-center items-center flex-col">
      <button className="text-6xl" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="mt-5">
        <ul>
          {users.map((user) => (
            <li>Name: {user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default test;
