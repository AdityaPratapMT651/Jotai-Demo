import { useEffect, useRef } from "react";
import { useAtomValue } from "jotai";
import "./style.css";
import { countAtom } from "../../atoms/countAtom";

const Counter = () => {
  const count = useAtomValue(countAtom);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div className="counter-container">
      <div className="counter">{count}</div>
      <div className="render-counter">Render count: {renderCount.current}</div>
    </div>
  );
};

export default Counter;
