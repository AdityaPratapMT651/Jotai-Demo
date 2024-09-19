import { useEffect, useRef } from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button = ({ text, onClick }: ButtonProps) => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });
  return (
    <div className="button-wrapper">
      <button className="button" onClick={onClick}>
        {text}
      </button>
      <div className="render-counter">Render count: {renderCount.current}</div>
    </div>
  );
};

export default Button;
