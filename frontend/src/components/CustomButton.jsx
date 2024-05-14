import React from "react";

const CustomButton = ({ className, text, onClick, type="submit" }) => {
  return (
    <div>
      <button type={type} className={className} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
