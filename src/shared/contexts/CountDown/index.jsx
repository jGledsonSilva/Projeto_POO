import { createContext, useEffect } from "react";
import { useState } from "react";

export const CountDownContext = createContext({});

export const CountDownProvider = ({children}) => {

  let countdownTimeout;

  const standardTime = 25 * 60;

  const [initialTime, setInitialTime] = useState(standardTime);
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
    clearTimeout(countdownTimeout);
    setHasFinished(false);
    setIsActive(false);
    setTime(initialTime);
  }

  const skipTenSeconds = () => {
    clearTimeout(countdownTimeout);
    time > 0 ? setTime(time - 10) : alert("Não é mais possível adiar o tempo");
  }

  const pomoTime = () => {
    setIsRestTime(false);
    setTime(standardTime);
  }
  
  const pauseCountDown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
  }

  const standardRestTime = () => {
    pauseCountDown();
    setIsRestTime(true);
    setInitialTime(15 * 60);
    setTime(initialTime);
  }

  const shortRestTime = () => {
    clearTimeout(countdownTimeout);
    pauseCountDown();
    setIsRestTime(true);
    setInitialTime(5 * 60);
    console.log(initialTime)
    setTime(initialTime);
  }

  const longRestTime = () => {
    setInitialTime(25 * 60);
    clearTimeout(countdownTimeout);
    pauseCountDown();
    console.log(initialTime)
    setTime(initialTime);
    setIsRestTime(true);
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