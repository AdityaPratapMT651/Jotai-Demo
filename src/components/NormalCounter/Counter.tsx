import { useEffect, useRef } from "react";
import "./style.css";

interface CounterProps {
  count: number;
}

const Counter = ({ count }: CounterProps) => {
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
