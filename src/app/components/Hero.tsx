import Image from 'next/image'
import mainImage from '@/assets/hero-img.png'
import { BiLogoWhatsapp } from 'react-icons/bi'
import { CtaButton } from './CtaButton'

export function Hero() {
  return (
    <main className="flex flex-col bg-hero bg-cover bg-no-repeat gap-4 py-8 px-4 font-roboto">
      <h1 className="text-slate-900 text-[32px] font-medium leading-[40px]">
        Somos um escritório especialista e pronto para te ajudar a recuperar o
        seu veículo que foi tomado pelo banco ou para você que está sendo
        ameaçado de perder o seu bem!
      </h1>

      <span className="text-slate-900 font-normal text-xl leading-[24px]">
        Nosso escritório atende em todo território nacional com agilidade,
        eficiência e online o que nos permite analisar o seu caso com
        profundidade para encontrar a melhor estratégia jurídica na resolução do
        seu problema.
      </span>

      <div>
        <Image
          src={mainImage}
          alt="Imagem de homem preocupado com carro quebrado"
        />
      </div>

      <CtaButton />
    </main>
  )
}
