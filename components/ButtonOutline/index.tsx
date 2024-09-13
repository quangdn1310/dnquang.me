import { Button, ButtonProps } from "antd";
import React from "react";
import { cn } from "@/utils/cn";

interface ButtonOutlineProps extends ButtonProps {}

const ButtonOutline: React.FC<ButtonOutlineProps> = (props) => {
  return (
    <Button
      type={props.type}
      htmlType={props.htmlType || "button"}
      className={cn(
        `px-8 py-2 h-14 bg-[#343333] border-[#343333] ${
          !props.disabled
            ? "transition-all hover:!bg-transparent hover:!text-black"
            : ""
        } text-lg font-bold rounded-md`,
        props.className
      )}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
};

export default ButtonOutline;
