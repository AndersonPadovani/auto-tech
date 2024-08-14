import Image from "next/image";
import BgOficina from "../../public/img/bg-oficina.jpg";
import LogoImg from "../../public/img/logo2.png";
import WidgetServicos from "@/components/widgetServicos/widgetServicos";
import WidgetWhyChose from "@/components/widgetWhyChose/widgetWhyChose";
import Divider from "@/components/dividers/dividers";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 w-full min-h-dvh bg-color-background">
      <Image
        src={BgOficina}
        alt="Imagen de uma oficina mecânica"
        className="img-bg"
      />

      <section className="flex flex-col items-center w-1/2 max-lg:w-full">
        <Image
          src={LogoImg}
          alt="Imagen da Logo Marca Auto Tech"
          className="w-logWidth h-32 mt-24 max-lg:w-5/6"
        />
        {/* <h3 className="text-color-orange text-lg mt-2">Excelência em Manutenção Automotiva</h3> */}
        <h3 className="text-color-orange text-lg mt-2">
          Mecânica e manutenção automotiva
        </h3>

        <p className="text-slate-100 text-sm text-pretty w-10/12 mt-24 max-lg:text-center">
          Na <span className="text-color-orange font-bold">AutoTech</span>,
          sabemos o quanto seu veículo é importante para você. Por isso,
          oferecemos serviços de manutenção e reparos automotivos de alta
          qualidade, realizados por profissionais experientes e dedicados. Nossa
          missão é garantir que seu carro esteja sempre em perfeitas condições,
          para que você possa dirigir com tranquilidade e segurança.
        </p>

        <div className="flex flex-col items-center w-max mt-32 gap-7 max-lg:w-11/12 max-lg:mt-20">
          <div className="flex gap-7">
            <a href={process.env.PAGE_SOCIAL_INSTAGRAM_LINK} target="_blank">
              <img
                src="./img/instagram.png"
                alt="Instagram Icone"
                className="max-w-12 customHover"
              />
            </a>
            <a href={process.env.PAGE_SOCIAL_FACEBOOK_LINK} target="_blank">
              <img
                src="./img/facebook.png"
                alt="Facebook icone"
                className="max-w-12 customHover"
              />
            </a>
            <a href={process.env.PAGE_SOCIAL_WHATSAPP_LINK} target="_blank">
              <img
                src="./img/whatsapp.png"
                alt="Wahtsapp Icone"
                className="max-w-12 customHover"
              />
            </a>
          </div>
          <Link
            href={process.env.PAGE_SOCIAL_WHATSAPP_LINK!}
            target="_blank"
            className="text-2xl p-2 hover:bg-color-orang font-bold
            bg-color-orange-secondary rounded-xl text-slate-100 max-lg:bg-color-orange-secondary
             max-lg:text-slate-100 max-lg:rounded-xl max-lg:text-center "
          >
            Agende Seu Serviço Hoje Mesmo!
          </Link>
        </div>
      </section>

      <section className="flex flex-col w-full z-10 mt-6 items-center pb-3 bg-color-orange-secondary">
        <Divider titleName="nossos fornecedores" />

        <div className="flex flex-wrap w-5/6 justify-between mt-3">
          <img
            src="./img/fornecedor1.png"
            alt="imagen de fornecedor de peças"
            className="customHover  max-lg:w-14"
          />
          <img
            src="./img/fornecedor2.png"
            alt="imagen de fornecedor de peças"
            className="customHover  max-lg:w-14"
          />
          <img
            src="./img/fornecedor3.png"
            alt="imagen de fornecedor de peças"
            className="customHover  max-lg:w-14"
          />
          <img
            src="./img/fornecedor4.png"
            alt="imagen de fornecedor de peças"
            className="customHover  max-lg:w-14"
          />
          <img
            src="./img/fornecedor5.png"
            alt="imagen de fornecedor de peças"
            className="customHover  max-lg:w-14 max-w-64"
          />
          <img
            src="./img/fornecedor6.png"
            alt="imagen de fornecedor de peças"
            className="customHover  max-lg:w-14"
          />
        </div>
      </section>

      <section className="flex flex-col w-full items-center z-10 mt-28">
        <Divider titleName="nossos serviços" />

        <div className="flex w-5/6 flex-wrap justify-between gap-10 max-lg:mt-10">
          <WidgetServicos
            srcIcon="./img/iconRevisao.png"
            titleName="Revisões periódicas e preventivas"
          />
          <WidgetServicos
            srcIcon="./img/iconScanner.png"
            titleName="Diagnóstico eletrônico"
          />
          <WidgetServicos
            srcIcon="./img/iconFiltro.png"
            titleName="Troca de óleo e filtros"
          />
          <WidgetServicos
            srcIcon="./img/iconAr.png"
            titleName="Serviços de ar condicionado"
          />
          <WidgetServicos
            srcIcon="./img/iconMotor.png"
            titleName="Reparos de motor e transmissão"
          />
          <WidgetServicos
            srcIcon="./img/iconFreio.png"
            titleName="Serviços de suspensão e freios"
          />
        </div>
      </section>

      <section className="flex flex-col w-full items-center mt-16">
        <Divider titleName="Por que escolher a AutoTech?" />

        <div
          className="flex flex-wrap justify-around max-lg:w-full max-lg:rounded-none
           max-lg:bg-color-background rounded-tl-[50px] rounded-br-[50px] w-5/6 p-10 gap-5 bg-color-background-secondary"
        >
          <WidgetWhyChose
            srcIcon="./img/iconJuventude.png"
            titleName="Profissionais Qualificados"
            description="Nossa equipe é composta por técnicos altamente treinados e certificados, 
                  prontos para lidar com qualquer tipo de problema no seu veículo."
          />

          <WidgetWhyChose
            srcIcon="./img/carrosPersonalizados.png"
            titleName="Atendimento Personalizado"
            description="Valorizamos cada cliente e tratamos cada veículo como se fosse único. 
                  Nosso atendimento é feito com atenção aos detalhes e total transparência."
          />

          <WidgetWhyChose
            srcIcon="./img/iconAll.png"
            titleName="Serviço Completo"
            description="Oferecemos uma gama completa de serviços desde man’utenção preventiva até reparos complexos, 
              utilizando as mais modernas ferramentas e tecnologias."
          />

          <WidgetWhyChose
            srcIcon="./img/iconRapidez.png"
            titleName="Rapidez e Eficiência"
            description="Sabemos que seu tempo é precioso. Trabalhamos para entregar seu veículo o mais rápido possível, 
              sem comprometer a qualidade do serviço."
          />
        </div>
      </section>

      <footer className="flex w-full mt-8 bg-color-background-secondary p-3 z-10 justify-center bottom-0">
        <span className="w-5/6 h-max text-balance text-center text-slate-100 max-lg:text-xs max-lg:w-full">
          © 2024 ARP Dev Solutions. Todos os direitos reservados. Nenhuma parte
          deste site pode ser reproduzida, distribuída ou transmitida de
          qualquer forma ou por qualquer meio, incluindo fotocópia, gravação ou
          outros métodos eletrônicos ou mecânicos, sem a prévia autorização por
          escrito da ARP Dev Systems.
        </span>
      </footer>
    </main>
  );
}
