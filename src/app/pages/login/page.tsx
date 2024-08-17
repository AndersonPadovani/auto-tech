"use client";
import Image from "next/image";
import CarCrash from "../../../../public/img/car_crash.svg";
import "./login.css";
import InputForm from "@/components/inputForm/inputForm";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { UserCredentials as LocalUserCredentials } from "../../resources/localUserCredentials";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export default function Page(this: any) {
  const [login, setLogin] = useState("");
  const [passw, setPassw] = useState("");
  const [check, setCheck] = useState(Boolean);

  const userCredentials = new LocalUserCredentials();

  const formUserValidation = z.object({
    login: z.string().min(4),
    passw: z.string().min(4),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formUserValidation),
  });

  useEffect(() => {
    const local = userCredentials.getUserCredentials();
    if (local) {
      setLogin(local.login);
      setPassw(local.passw);
      setCheck(local.forgoout);
    }
  }, []);

  useEffect(() => {
    if (login.length >= 4 && passw.length >= 4 && check) {
      userCredentials.InsertUserCredentials({
        login: login,
        passw: passw,
        forgoout: check,
      });
    } else {
      userCredentials.ClearUserCredentials();
    }
  }, [check, login, passw]);

  return (
    <main className="flex items-center justify-center bg_login w-dvw h-dvh">
      <div className="w-full h-full absolute backdrop-blur-0 top-0 left-0  blur-sm"></div>
      <form
        onSubmit={handleSubmit(() => console.log("save"))}
        className="flex flex-col bg-transparent/60 items-center justify-center z-10 w-2/5 rounded-3xl gap-5 border-color-orange border-2"
      >
        <Image
          alt="carros batendo"
          src={CarCrash}
          className="w-32 bg-cyan-800 h-32 border-color-orange border-2 rounded-full relative -top-16"
        />
        <InputForm
          valueName="usuario"
          {...register("login")}
          type="text"
          valueInput={login}
          onChangeCapture={(event) => setLogin(event.currentTarget.value)}
        />
        <InputForm
          valueName="senha"
          {...register("passw")}
          type="password"
          valueInput={passw}
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
            checked={check}
            onCheckedChange={() => setCheck((set) => !set)}
          />
        </label>

        <button className="bg-color-orange-secondary w-2/3 hover:bg-color-orange rounded-xl h-8 mb-10 text-slate-200 font-bold text-lg uppercase">
          entrar
        </button>
      </form>
    </main>
  );
}
