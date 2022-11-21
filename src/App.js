import Timer from './components/Timer/Timer';
import './App.scss';
import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          setTime((prevValue) => prevValue + 1);
        }, 0)
      );
    }
  };

  const stopTimer = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <div className='container'>
      <div>
        <Timer time={time} />
      </div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
