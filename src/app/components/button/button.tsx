import { memo } from "react";
import { ButtonProps } from "./types";

const Button = ({
  label,
  type,
  icon: Icon,
  iconOnly,
  onClick,
}: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`
      
         ${
           !iconOnly &&
           !Icon &&
           `
          bg-[linear-gradient(to_bottom,_#40678c,_#2c5378)]
         text-white
         rounded-[5px]
         px-3
         py-[7px]
        `
         }`}
      >
        {iconOnly ? Icon : <>{label}</>}
      </button>
    </>
  );
};

export default memo(Button);
