import { HtmlHTMLAttributes, InputHTMLAttributes, useState } from "react";
import "./inputForm.css";

interface InputFormType extends InputHTMLAttributes<HTMLInputElement> {
  valueName: string;
}

const InputForm = ({ valueName, ...rest }: InputFormType) => {
  const [inpText, setInpText] = useState("");
  return (
    <div className="flex items-center w-2/3 h-max relative">
      <input
        className={`inpType ${inpText ? "inpHasText" : ""} w-full h-14 pl-3 text-slate-200 font-bold text-lg bg-transparent/30 rounded-xl border-green-700 border-2 outline-none`}
        id={valueName}
        minLength={4}
        {...rest}
        onChange={(event) => setInpText(event.currentTarget.value)}
      />
      <label htmlFor={valueName} className="absolute ml-3 px-2 text-slate-200">
        {valueName}
      </label>
    </div>
  );
};

export default InputForm;
