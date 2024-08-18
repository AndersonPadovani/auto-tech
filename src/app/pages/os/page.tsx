"use client";
import { BoxInput } from "@/components/boxInput/boxInput";
import InputForm from "@/components/inputForm/inputForm";
import { number } from "zod";

export default function Page() {
  return (
    <main className="flex flex-col w-full items-center gap-5 h-dvh bg-color-background">
      <nav className="flex w-3/4 h-max justify-between">
        <img
          src="../img/service.png"
          alt="Imagen Logo empresa"
          className="w-20 h-20"
        />
        <menu className="flex gap-8 items-center">
          <li>
            <a href="http://">logout</a>
          </li>
          <li>
            <a href="http://">Nova OS</a>
          </li>
          <li>
            <a href="http://">Consultar OS</a>
          </li>
        </menu>
      </nav>

      <hr className="w-4/5 " />

      <section className="w-3/4">
        <form>
          <div className="flex flex-col gap-5">
            <BoxInput boxName="Dados do Cliente">
              <InputForm valueName="Nome" divClassName="col-span-3" />
              <InputForm valueName="Telefone" divClassName="col-span-1" />
              <InputForm valueName="CPF" divClassName="col-span-1" />
              <InputForm valueName="CEP" divClassName="col-span-1" />
              <InputForm valueName="Cidade" divClassName="col-span-1" />
              <InputForm valueName="Rua" divClassName="col-span-3" />
              <InputForm
                valueName="Numero"
                itemType="number"
                divClassName="col-span-1"
              />
            </BoxInput>
            <BoxInput boxName="Dados do Veiculo">
              <InputForm valueName="Veiculo" />
              <InputForm valueName="Placa" />
              <InputForm valueName="Ano" typeof="number" />
            </BoxInput>
            <BoxInput boxName="Serviços"></BoxInput>
          </div>
        </form>
      </section>
    </main>
  );
}
