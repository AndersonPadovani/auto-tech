"use client";
import Image from "next/image";
import CarCrash from "../../../../public/img/car_crash.svg";
import "./login.css";
import InputForm from "@/components/inputForm/inputForm";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";

type credentialsType = {
  login: string;
  passw: string;
};

export default function Page(this: any) {
  const [login, setLogin] = useState("");
  const [passw, setPassw] = useState("");
  const [check, setCheck] = useState(Boolean);

  const keyCrendentials = "CREDENTIALS";

  const onSaveUserCredentials = () => {
    if (login.length >= 4 && passw.length >= 4 && check) {
      localStorage.setItem(
        keyCrendentials,
        JSON.stringify({ Login: login, Passw: passw })
      );
    }
    if (!check) {
      localStorage.removeItem(keyCrendentials);
    }
  };

  useEffect(() => {
    const local = localStorage.getItem(keyCrendentials);
    if (local) {
      const localIten = JSON.parse(local) as credentialsType;
      console.log(localStorage.getItem(keyCrendentials));

      // setLogin(localIten.login);
      // setPassw(localIten.passw);
    }
  });

  useEffect(() => {
    onSaveUserCredentials();
  }, [check, login, passw]);

  return (
    <main className="flex items-center justify-center bg_login w-dvw h-dvh">
      <div className="w-full h-full absolute backdrop-blur-0 top-0 left-0  blur-sm"></div>
      <form
        action=""
        className="flex flex-col bg-transparent/60 items-center justify-center z-10 w-2/5 rounded-3xl gap-5 border-color-orange border-2"
      >
        <Image
          alt="carros batendo"
          src={CarCrash}
          className="w-32 bg-cyan-800 h-32 border-color-orange border-2 rounded-full relative -top-16"
        />
        <InputForm
          valueName="usuario"
          type="text"
          onChangeCapture={(event) => setLogin(event.currentTarget.value)}
        />
        <InputForm
          valueName="senha"
          type="password"
          onChangeCapture={(event) => setPassw(event.currentTarget.value)}
        />

        <label
          htmlFor="forgout"
          className="flex items-center gap-3 text-slate-200 "
        >
          Lembre-me
          <Checkbox
            name="forgout"
            id="forgout"
            className="border-slate-200"
            onCheckedChange={(event) => setCheck((set) => !set)}
          />
        </label>

        <button className="bg-color-orange-secondary w-2/3 rounded-xl h-8 mb-10 text-slate-200 font-bold text-lg uppercase">
          entrar
        </button>
      </form>
    </main>
  );
}
