"use client";
import { BoxInput } from "@/components/boxInput/boxInput";
import InputForm from "@/components/inputForm/inputForm";
import { LogOut, FilePlus2, FileSearch } from "lucide-react";
import { useEffect, useState } from "react";
import { ValidaCep, GetCepInfo } from "@/utils/getCep";

export default function Page() {
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [rua, setRua] = useState("");

  useEffect(() => {
    if (!ValidaCep({ cep })) {
      return;
    }

    handlerGetCepInfo();
  }, [cep]);

  const handlerGetCepInfo = async () => {
    const infoCep = await GetCepInfo({ cep });
    if (infoCep) {
      setCep(infoCep.cep);
      setCidade(infoCep.localidade);
      setRua(infoCep.logradouro);
    }
  };

  return (
    <main className="flex flex-col w-full items-center gap-5 h-dvh bg-color-background">
      <nav className="flex pt-4 w-3/4 h-max justify-between">
        <img
          src="../img/logo2.png"
          alt="Logo marca Auto Tech"
          className="h-20"
        />
        <menu className="flex gap-8 items-center text-color-text">
          <li>
            <a className="flex gap-2" href="http://">
              Nova OS
              <FilePlus2 className="text-color-orange" />
            </a>
          </li>
          <li>
            <a className="flex gap-2" href="http://">
              Consultar OS
              <FileSearch className="text-color-orange" />
            </a>
          </li>
          <li>
            <a className="flex gap-2" href="http://">
              logout
              <LogOut className="text-color-orange" />
            </a>
          </li>
        </menu>
      </nav>

      <hr className="w-4/5  " />

      <section className="w-3/4 p-5 pb-10 rounded-sm bg-color-background-secondary ">
        <form>
          <div className="flex flex-col gap-5">
            <BoxInput boxName="Dados do Cliente">
              <InputForm valueName="Nome" divClassName="col-span-3" />
              <InputForm valueName="Telefone" divClassName="col-span-1" />
              <InputForm valueName="CPF" divClassName="col-span-1" />
              <InputForm
                valueName="CEP"
                valueInput={cep}
                divClassName="col-span-1"
                onChangeCapture={(event) => {
                  setCep(event.currentTarget.value);
                }}
              />
              <InputForm
                valueName="Cidade"
                valueInput={cidade}
                divClassName="col-span-1"
                onChangeCapture={(event) => {
                  setCidade(event.currentTarget.value);
                }}
              />
              <InputForm
                valueName="Rua"
                valueInput={rua}
                divClassName="col-span-3"
                onChangeCapture={(event) => {
                  setRua(event.currentTarget.value);
                }}
              />
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
              <InputForm valueName="Codigo Cor" typeof="number" />
              <InputForm valueName="Combustivel" typeof="number" />
            </BoxInput>
            <BoxInput boxName="Serviços"></BoxInput>
          </div>
        </form>
      </section>
    </main>
  );
}
