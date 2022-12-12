import { createContext, useEffect } from "react";
import { useState } from "react";

export const CountDownContext = createContext({});

export const CountDownProvider = ({children}) => {

  let countdownTimeout;

  const initialTime = 25 * 60;

  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [isRestTime, setIsRestTime] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountDown = () => {
    setIsActive(true);
  }

  const resetCountDown = () => {
    setIsRestTime(false)
    clearTimeout(countdownTimeout);
    setHasFinished(false);
    setIsActive(false);
    setTime(initialTime);
  }

  const skipTenSeconds = () => {
    clearTimeout(countdownTimeout);
    setTime(time - 10);
  }

  const pomoTime = (time) => {
    setTime(time);
  }
  
  const pauseCountDown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
  }

  const standardRestTime = () => {
    pauseCountDown();
    setIsRestTime(true);
    setTime(15 * 1);
  }

  const shortRestTime = () => {
    clearTimeout(countdownTimeout);
    pauseCountDown();
    setIsRestTime(true);
    setTime(5 * 60);
  }

  const longRestTime = () => {
    clearTimeout(countdownTimeout);
    pauseCountDown();
    setIsRestTime(true);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
    }, 1000)
    } else if (isActive && time === 0 && !isRestTime) {
      setHasFinished(true);
      standardRestTime();
      setIsActive(false);
    } else if (isRestTime && time === 0) {
      setTime(initialTime);
      setHasFinished(false);
      setIsActive(false);
      setIsRestTime(false);
    }
  }, [isRestTime, isActive, time])

  return (
    <CountDownContext.Provider value={{
      seconds,
      minutes,
      pomoTime,
      isActive,
      isRestTime,
      hasFinished,
      pauseCountDown,
      skipTenSeconds,
      standardRestTime,
      shortRestTime,
      longRestTime,
      startCountDown,
      resetCountDown
    }}>
      {children}
    </CountDownContext.Provider>
  )
}