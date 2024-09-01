import {
  HtmlHTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useState,
} from "react";
import "./inputForm.css";
import Image from "next/image";
import Eye from "../../../public/img/olho.svg";
import Eyex from "../../../public/img/olhox.svg";

interface InputFormType extends InputHTMLAttributes<HTMLInputElement> {
  valueName: string;
  valueInput?: string;
  className?: string;
  divClassName?: string;
  type?: HTMLInputTypeAttribute;
  passwordType?: boolean;
}

const InputForm = ({
  valueName,
  valueInput,
  className,
  divClassName,
  passwordType,
  type,
  ...rest
}: InputFormType) => {
  const [inpText, setInpText] = useState("");
  const [eye, setEye] = useState(false);

  return (
    <div className={`${divClassName} flex items-center w-full h-max relative`}>
      <input
        className={`inpType ${inpText || valueInput ? "inpHasText" : ""} w-full h-14 pl-3 text-slate-200 font-bold text-lg bg-transparent/30 rounded-xl border-green-700 border-2 outline-none ${className || ""}`}
        id={valueName}
        minLength={4}
        type={eye ? "password" : "text"}
        {...rest}
        value={valueInput}
        onChange={(event) => setInpText(event.currentTarget.value)}
      />

      {type === "password" ? (
        <Image
          width={30}
          height={30}
          src={eye ? Eye : Eyex}
          alt={"Eye Password"}
          className="absolute right-3"
          onClick={() => setEye((e) => !e)}
        />
      ) : (
        ""
      )}

      <label htmlFor={valueName} className="absolute ml-3 px-2 text-slate-200">
        {valueName}
      </label>
    </div>
  );
};

export default InputForm;
