import Image from 'next/image'
import imageBruno from '@/assets/about-me-bruno.png'

export function AboutMeSection() {
  return (
    <section className="flex flex-col bg-vector bg-slate-50 lg:flex-row bg-center lg:pr-8  bg-contain bg-no-repeat">
      {/* Principal container */}
      <div className="px-4 py-8 flex flex-col gap-4 font-roboto lg:px-20 lg:py-14">
        <h2 className="text-slate-800 text-[32px] font-semibold leading-[44px] ">
          Sobre mim
        </h2>

        <div className="h-[3px] w-[133px] bg-amber-600 " />

        <span className="text-slate-800 text-xl font-normal leading-[32px] mt-[6xp] ">
          Dr Bruno Silva, advogado com inscrição de número 26.294 pela OAB/MA
          atuante e experiente na área da busca e apreensão de veículos
          financiados. Graduado pelo Centro Universitário Unifacid de Teresina
          Piauí, foi assessor judiciário pelo tribunal de justiça do estado do
          Maranhão no ano de 2022. Pós graduando em processo civil pela EMERJA.
          Atualmente com mais de 100 processos de busca e apreensão envolvidos e
          diversos carros recuperados.
        </span>
      </div>

      <div className="lg:h-full lg:flex lg:items-end lg:justify-end lg:mt-auto">
        <Image src={imageBruno} alt="Advogado Bruno" />
      </div>
    </section>
  )
}
