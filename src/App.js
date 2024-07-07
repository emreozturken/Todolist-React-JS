import React, { useState } from 'react';

const App = () => {
  const [todoArray, setTodoArray] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

  const createTask = (event) => {
    event.preventDefault();
    if (!userInput) {
      setError("Please enter a task!");
      return;
    }
    setTodoArray([...todoArray, userInput]);
    setUserInput('');
    setError(null);
  };

  return (
    <form onSubmit={createTask} className="flex justify-center items-center h-screen flex-col">
      <div className="text-center mb-6">
        <img src="/todo.png" className="w-16 h-16 mb-2 mx-auto object-contain" alt="Todo Logo" />
        <h1 className="text-3xl">TODO App</h1>
      </div>

      {error && (
        <p className="text-rose-500">
          {error}
        </p>
      )}

      <input
        type="text"
        className="border rounded-lg p-2 w-96 mb-4"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter a task please! 😊"
      />

      <button
        type="submit"
        className="bg-green-500 p-2 border rounded-lg w-32 text-white"
      >
        Add Task
      </button>

      <div className="mt-10">
        {todoArray.map((task, index) => (
          <p
            key={index}
            className="font-bold mb-2 border bg-white rounded-lg p-6 w-96"
          >
            {task}
          </p>
        ))}
      </div>
    </form>
  );
};

export default App;