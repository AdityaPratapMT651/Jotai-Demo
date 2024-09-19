import { useCallback } from "react";
import { useSetAtom } from "jotai";
import "./style.css";
import Counter from "./Counter";
import Button from "./Button";
import { countAtom } from "../../atoms/countAtom";

const JotaiCounter = () => {
  const setCount = useSetAtom(countAtom);

  const increment = useCallback(() => setCount((prev) => prev + 1), [setCount]);
  const decrement = useCallback(() => setCount((prev) => prev - 1), [setCount]);

  return (
    <div className="jotai-counter-container">
      <h3>Jotai Counter</h3>
      <Counter />
      <div className="button-container">
        <Button text="Decrement" onClick={decrement} />
        <Button text="Increment" onClick={increment} />
      </div>
    </div>
  );
};

export default JotaiCounter;
