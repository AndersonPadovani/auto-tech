import axios from "axios";

type GetCepType = {
  cep: string;
};

export type CepInfoType = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
  unidade: string;
};

const URL_API = "https://viacep.com.br/ws/";
const URL_END = "/json";

export const GetCepInfo = async ({
  cep,
}: GetCepType): Promise<CepInfoType | undefined> => {
  if (!ValidaCep) {
    return;
  }

  const { data } = await axios(`${URL_API}${cep}${URL_END}`).catch((error) => {
    return error;
  });

  return data as CepInfoType;
};
export const ValidaCep = ({ cep }: GetCepType): boolean => {
  const regecClear = cep.replace(/\D/g, ""); // Remove tudo que não é dígito
  const regexCep = /^[0-9]{8}$/; // Verifica se há exatamente 8 dígitos
  return regexCep.test(regecClear);
};

const LimpaCep = ({ cep }: GetCepType): GetCepType => {
  return { cep: cep.replace(/\D/g, "") }; // Remove tudo que não é dígito
};

export const FormataCep = ({ cep }: GetCepType): GetCepType | null => {
  // Verifica se o CEP tem exatamente 8 dígitos
  if (/^\d{8}$/.test(cep)) {
    // Adiciona o hífen após o quinto dígito
    return { cep: cep.slice(0, 5) + "-" + cep.slice(5) };
  } else {
    // Retorna null se o CEP for inválido
    return null;
  }
};
