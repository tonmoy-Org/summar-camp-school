import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from './assets/vite.svg';
import './App.css';
import DarkModeToggle from 'react-dark-mode-toggle';

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => true);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <div>
      </div>

      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
