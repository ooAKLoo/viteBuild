import { useState } from 'react';
import viteLogo from '../../public/assets/image/img-text/image-file.png';

// Assuming you have an index.css file that imports Tailwind CSS
import '../index.css';

function MainPage() {
  const [count, setCount] = useState(0);
  console.log('MainPage component is being rendered');
  return (
    <div className="text-center">
      <div className="mt-4">
        <a href="https://vitejs.dev" target="_blank" className="inline-block">
          <img src={viteLogo} className="h-24 mx-auto" alt="Vite logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mt-4">Vite + React</h1>
      <div className="mt-4 bg-gray-100 p-4 rounded shadow">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="text-lg bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-yellow-600 rounded p-1">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default MainPage;
