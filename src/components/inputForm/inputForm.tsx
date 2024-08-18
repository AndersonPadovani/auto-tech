import { HtmlHTMLAttributes, InputHTMLAttributes, useState } from "react";
import "./inputForm.css";

interface InputFormType extends InputHTMLAttributes<HTMLInputElement> {
  valueName: string;
  valueInput?: string;
  className?: string;
  divClassName?: string;
}

const InputForm = ({
  valueName,
  valueInput,
  className,
  divClassName,
  ...rest
}: InputFormType) => {
  const [inpText, setInpText] = useState("");
  return (
    <div className={`${divClassName} flex items-center w-full h-max relative`}>
      <input
        className={`inpType ${inpText || valueInput ? "inpHasText" : ""} w-full h-14 pl-3 text-slate-200 font-bold text-lg bg-transparent/30 rounded-xl border-green-700 border-2 outline-none ${className || ""}`}
        id={valueName}
        minLength={4}
        {...rest}
        value={valueInput}
        onChange={(event) => setInpText(event.currentTarget.value)}
      />
      <label htmlFor={valueName} className="absolute ml-3 px-2 text-slate-200">
        {valueName}
      </label>
    </div>
  );
};

export default InputForm;
