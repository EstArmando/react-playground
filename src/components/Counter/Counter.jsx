import { useState } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prev) => prev + 1);
  }

  function decrement() {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Counter</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
