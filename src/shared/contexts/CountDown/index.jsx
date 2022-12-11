import { createContext, useEffect } from "react";
import { useState } from "react";

export const CountDownContext = createContext({});

export const CountDownProvider = ({children}) => {

  let countdownTimeout;

  const initialTime = 25 * 1;

  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountDown = () => {
    setIsActive(true)
  }

  const resetCountDown = () => {
    clearTimeout(countdownTimeout);

    setHasFinished(false);
    setIsActive(false);
    setTime(initialTime);
  }

  const pomoTime = ({ time }) => {
    setTime(time);
  }
  
  const pauseCountDown = () => {
    setIsActive(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
    }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time])

  return (
    <CountDownContext.Provider value={{
      seconds,
      minutes,
      pomoTime,
      isActive,
      hasFinished,
      pauseCountDown,
      startCountDown,
      resetCountDown
    }}>
      {children}
    </CountDownContext.Provider>
  )
}