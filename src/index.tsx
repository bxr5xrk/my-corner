import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        className="text-red-500 p-2 rounded-md border bg-white w-10 h-10 flex items-center justify-center m-20"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        {counter}
      </button>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<Counter />);
