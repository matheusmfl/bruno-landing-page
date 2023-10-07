import Image from 'next/image'
import mainImage from '@/assets/hero-img.png'
import { CtaButton } from './CtaButton'

export function Hero() {
  return (
    <main className="flex flex-col bg-hero bg-cover bg-no-repeat gap-4 py-8 px-4 font-roboto lg:px-32 lg:py-14 lg:flex-row lg:gap-10">
      <div className="px-3 py-2 bg-slate-800 rounded lg:hidden">
        <h1 className="text-slate-50 text-2xl font-semibold">
          Seu veículo foi apreendido?
        </h1>
      </div>

      <h2 className="text-slate-900 text-[32px] font-medium leading-[40px] lg:hidden">
        Somos um escritório especialista e pronto para te ajudar a recuperar o
        seu veículo que foi tomado pelo banco ou para você que está sendo
        ameaçado de perder o seu bem!
      </h2>

      <span className="text-slate-900 font-normal text-xl leading-[24px] lg:hidden">
        Nosso escritório atende em todo território nacional com agilidade,
        eficiência e online o que nos permite analisar o seu caso com
        profundidade para encontrar a melhor estratégia jurídica na resolução do
        seu problema.
      </span>

      <div className="lg:hidden">
        <Image
          src={mainImage}
          alt="Imagem de homem preocupado com carro quebrado"
        />
      </div>

      <div className="lg:hidden">
        <CtaButton />
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden lg:flex lg:justify-between gap-10">
        <div className="flex flex-col gap-5 ">
          <div className="px-3 py-2 bg-slate-800 rounded max-w-[440px]">
            <h1 className="text-slate-50 text-2xl font-semibold">
              Seu veículo foi apreendido?
            </h1>
          </div>

          <h1 className="text-slate-900 text-[32px] font-medium leading-[40px]">
            Somos um escritório especialista e pronto para te ajudar a recuperar
            o seu veículo que foi tomado pelo banco ou para você que está sendo
            ameaçado de perder o seu bem!
          </h1>

          <span className="text-slate-900 font-normal text-xl leading-[24px]">
            Nosso escritório atende em todo território nacional com agilidade,
            eficiência e online o que nos permite analisar o seu caso com
            profundidade para encontrar a melhor estratégia jurídica na
            resolução do seu problema.
          </span>

          <CtaButton />
        </div>
        <div className="flex items-center h-full">
          <Image
            src={mainImage}
            alt="Imagem de homem preocupado com carro quebrado"
            className="scale-125 object-top"
          />
        </div>
      </div>
    </main>
  )
}
