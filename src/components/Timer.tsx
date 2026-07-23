import { useEffect, useState } from 'react';

const formatTime = (date: Date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const updateTime = (date: Date) => {
  const randomStep = Math.random() < 0.5 ? 0 : 2;
  return new Date(date.getTime() + randomStep * 1000);
};

const Timer = () => {
  const [internalTime, setInternalTime] = useState(() => new Date());
  const [realTime, setRealTime] = useState(() => new Date());
  const [showDiff, setShowDiff] = useState(false);

  useEffect(() => {
    let currentDate = new Date();
    let currentRealTime = new Date();

    const timerId = window.setInterval(() => {
      currentDate = updateTime(currentDate);
      currentRealTime = new Date();
      setInternalTime(currentDate);
      setRealTime(currentRealTime);
    }, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  const diffMs = internalTime.getTime() - realTime.getTime();
  const diffSeconds = Math.round(diffMs / 1000);
  const diffLabel = diffSeconds >= 0 ? `+${diffSeconds}s` : `${diffSeconds}s`;

  return (
    <div className="timerBox">
      <div className="timerValue">{formatTime(internalTime)}</div>
      <button type="button" className="toggleButton" onClick={() => setShowDiff((prev) => !prev)}>
        {showDiff ? '非表示' : '表示'}
      </button>
      {showDiff && <div className="timerLabel">{diffLabel}</div>}
    </div>
  );
};

export default Timer;
