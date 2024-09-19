import React, { ReactElement } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

interface inputProps {
  type: "text" | "password" | "email" | "number" | "date";
  secured?: boolean;
  icon?: React.JSX.Element;
  placeHolder?: string;
  inputClass?: string;
  className?: string;
  onInput: FunctionStringCallback;
  required?: boolean
}

const InputField = (props: inputProps) => {
  const [hidden, setHidden] = React.useState<boolean>(true);
  return (
    <div
      className={
        "w-full h-[50px] border gap-2 flex items-center justify-start px-4 rounded-lg " +
        props.className
      }
    >
      {props.icon}
      <input required={props.required}
        type={    (props.secured && hidden ? "password" : ( props.type === "password" ? "text" : props.type))  }
        placeholder={props.placeHolder}
        className={"border-none w-full outline-none h-[40px] placeholder:text-gray-300 bg-none" + props.inputClass}
        onInput={(e) => props.onInput(e.currentTarget.value)}
      />
      {(props.secured || props.type == "password") && (
        <>
          {!hidden ? (
            <RxEyeClosed
              size={20}
              onClick={() => setHidden(!hidden)}
              className="cursor-pointer active:opacity-5"
            />
          ) : (
            <RxEyeOpen
              size={20}
              onClick={() => setHidden(!hidden)}
              className="cursor-pointer active:opacity-5"
            />
          )}
        </>
      )}
    </div>
  );
};

export default InputField;
