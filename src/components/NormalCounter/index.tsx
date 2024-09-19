import { useCallback, useState } from "react";
import "./style.css";
import Counter from "./Counter";
import Button from "./Button";

const NormalCounter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  return (
    <div className="normal-counter-container">
      <h3>Normal Counter</h3>
      <Counter count={count} />
      <div className="button-container">
        <Button text="Decrement" onClick={decrement} />
        <Button text="Increment" onClick={increment} />
      </div>
    </div>
  );
};

export default NormalCounter;
