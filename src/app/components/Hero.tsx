import Image from 'next/image'
import mainImage from '@/assets/hero-img.png'
import { CtaButton } from './CtaButton'

export function Hero() {
  return (
    <main className="flex flex-col bg-hero bg-cover bg-center bg-no-repeat gap-4 py-8 lg:py-28 lg:px-28 px-4 font-roboto lg:flex-row lg:gap-10">
      <>
        <div className="px-3 py-4 bg-[#08254F] rounded lg:hidden">
          <h1 className="text-orange-400 text-3xl text-center font-bold">
            Seu veículo foi apreendido?
          </h1>
        </div>

        <h2 className="text-slate-50 text-[24px] text-center font-bold leading-[32px] lg:hidden">
          Somos um escritório especialista e pronto para te ajudar a recuperar o
          seu veículo que foi tomado pelo banco ou para você que está sendo
          ameaçado de perder o seu bem!
        </h2>

        <div className="lg:hidden">
          <Image
            src={mainImage}
            alt="Imagem de homem preocupado com carro quebrado"
          />
        </div>

        <div className="lg:hidden">
          <CtaButton />
        </div>
      </>

      {/* DESKTOP VERSION */}
      <div className="hidden lg:flex gap-10">
        <div className="flex flex-col gap-8 max-w-[580px] ">
          <div className="px-6 py-2 bg-[#08254F] flex items-center rounded max-w-[440px]">
            <h1 className="text-orange-400 text-2xl font-bold">
              Seu veículo foi apreendido?
            </h1>
          </div>

          <h1 className="text-slate-50 text-[32px] font-bold leading-[40px]">
            Somos um escritório especialista e pronto para te ajudar a recuperar
            o seu veículo que foi tomado pelo banco ou para você que está sendo
            ameaçado de perder o seu bem!
          </h1>

          <CtaButton />
        </div>
        <div className="flex items-center h-full">
          <Image
            src={mainImage}
            alt="Imagem de homem preocupado com carro quebrado"
          />
        </div>
      </div>
    </main>
  )
}
