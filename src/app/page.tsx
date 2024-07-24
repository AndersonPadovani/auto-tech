import Image from "next/image";
import BgOficina from "../../public/img/bg-oficina.jpg"
import LogoImg from "../../public/img/logo2.png"


export default function Home() {
  return (
    <main className="flex flex-col gap-6 w-full min-h-dvh bg-color-background">
        <Image src={BgOficina} alt="Imagen de uma oficina mecânica" className="img-bg"/>

        <section className="flex flex-col items-center w-1/2">
          <Image src={LogoImg} alt="Imagen da Logo Marca Auto Tech" className="w-logWidth h-32 mt-24"/>
          <h3 className="text-color-orange text-lg mt-2">Excelência em Manutenção Automotiva</h3>

          <p className="text-slate-100 text-sm text-balance w-10/12 mt-24">
            Na <span className="text-color-orange font-bold">AutoTech</span>, sabemos o quanto seu veículo é importante para você. Por isso, 
            oferecemos serviços de manutenção e reparos automotivos de alta qualidade, 
            realizados por profissionais experientes e dedicados. 
            Nossa missão é garantir que seu carro esteja sempre em perfeitas condições, 
            para que você possa dirigir com tranquilidade e segurança.
          </p>

          <div className="flex flex-col items-center w-max mt-32 gap-3">
            <div className="flex gap-7">
              <a href="http://"><img src="./img/instagram.png" alt="Instagram Icone" className="max-w-12"/></a>
              <a href="http://"><img src="./img/facebook.png" alt="Facebook icone" className="max-w-12"/></a>
              <a href="http://"><img src="./img/whatsapp.png" alt="Wahtsapp Icone" className="max-w-12"/></a>
            </div>
            <button className="text-2xl text-green-600 font-bold">Agende Seu Serviço Hoje Mesmo!</button>

          </div>
        </section>

        <section className="flex flex-col z-10 mt-6 w-full items-center pb-3 bg-color-orange-secondary">

          <span className="bg-color-orange w-full text-center text-2xl text-slate-100">nossos fornecedores</span>

          <div className="flex w-5/6 justify-between mt-3">
            <img src="./img/fornecedor1.png" alt="imagen de fornecedor de peças" className="hover:scale-110 transition-transform"/>           
            <img src="./img/fornecedor2.png" alt="imagen de fornecedor de peças" className="hover:scale-110 transition-transform"/>           
            <img src="./img/fornecedor3.png" alt="imagen de fornecedor de peças" className="hover:scale-110 transition-transform"/>           
            <img src="./img/fornecedor4.png" alt="imagen de fornecedor de peças" className="hover:scale-110 transition-transform"/>           
            <img src="./img/fornecedor5.png" alt="imagen de fornecedor de peças" className="hover:scale-110 transition-transform"/>           
            <img src="./img/fornecedor6.png" alt="imagen de fornecedor de peças" className="hover:scale-110 transition-transform"/>           
          </div>
        </section>

        

      
    </main>
  );
}
