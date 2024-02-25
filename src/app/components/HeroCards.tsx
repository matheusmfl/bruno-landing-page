import Icon1 from '@/assets/cardIcons/icon01.svg'
import Icon2 from '@/assets/cardIcons/icon02.svg'
import Icon3 from '@/assets/cardIcons/icon03.svg'
import Icon4 from '@/assets/cardIcons/icon04.svg'
import Image from 'next/image'

export function HeroCards() {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-none relative">
      <div className="lg:mx-28 flex flex-col lg:flex-row bg-none rounded-md  lg:overflow-hidden   shadow-xl">
        {/* Card 1 */}
        <div className="rounded-bl-2 h-[215px] lg:h-[292px] bg-slate-100 flex flex-col px-6 py-6 lg:py-8 gap-6 items-center">
          {/* Icon + título */}
          <div className="flex flex-col items-center">
            <Image src={Icon1} alt="Icone" />
            <h2 className="font-bold text-xl text-center text-slate-800 ">
              Elaboração da defesa
            </h2>
          </div>

          <span className="font-normal text-xl leading-6 text-center text-slate-800">
            Revisamos seu contrato para identificar possíveis práticas
            predatórias e juros excessivos
          </span>
        </div>
        {/* Card 2 */}
        <div className="rounded-tl-2 rounded-bl-2 h-[215px] lg:h-[292px] bg-slate-100 flex flex-col px-6 py-6 lg:py-8 gap-6 items-center">
          {/* Icon + título */}
          <div className="flex flex-col items-center">
            <Image src={Icon2} alt="Icone" />
            <h2 className="font-bold text-xl text-center text-slate-800 ">
              Atendimento especializado
            </h2>
          </div>

          <span className="font-normal text-xl leading-6 text-center text-slate-800">
            Negociamos diretamente com o banco em seu nome buscando sempre
            acordos favoráveis
          </span>
        </div>

        {/* Card 3 */}
        <div className="rounded-tl-2  rounded-bl-2 h-[265px] lg:h-[292px] bg-[#08254F] flex flex-col px-6 py-6 lg:py-8 gap-6 items-center">
          {/* Icon + título */}
          <div className="flex flex-col items-center">
            <Image src={Icon3} alt="Icone" />
            <h2 className="font-bold text-xl text-center text-slate-50 ">
              Atendemos todo território nacional
            </h2>
          </div>

          <span className="font-normal text-xl leading-6 text-center text-slate-50">
            Atuamos na sua defesa, interpondo Recursos no Tribunal de Justiça,
            com o objetivo de derrubar a liminar.
          </span>
        </div>

        {/* Card 4 */}
        <div className="rounded-tl-2 rounded-bl-2 h-[215px] lg:h-[292px] bg-slate-100 flex flex-col px-6 py-6 lg:py-8 gap-6 items-center">
          {/* Icon + título */}
          <div className="flex flex-col items-center">
            <Image src={Icon4} alt="Icone" />
            <h2 className="font-bold text-xl text-center text-slate-800 ">
              Em busca da posse
            </h2>
          </div>

          <span className="font-normal text-xl leading-6 text-center text-slate-800">
            Atuamos na sua defesa, interpondo Recursos no Tribunal de Justiça,
            com o objetivo de derrubar a liminar.
          </span>
        </div>
      </div>

      {/* Float card 03 */}
      <div className="rounded-md border border-slate-50 hidden w-[300px] h-[352px] absolute top-1/2 left-1/2 transform -translate-x-[38px] -translate-y-1/2 rounded-bl-2 bg-[#08254F] lg:flex flex-col px-6 py-8 gap-6 items-center">
        {/* Icon + título */}
        <div className="flex flex-col items-center">
          <Image src={Icon3} alt="Icone" />
          <h2 className="font-bold text-xl text-center text-slate-50 ">
            Atendemos todo território nacional
          </h2>
        </div>

        <span className="font-normal text-xl leading-6 text-center text-slate-50">
          Atuamos na sua defesa, interpondo Recursos no Tribunal de Justiça, com
          o objetivo de derrubar a liminar.
        </span>
      </div>
    </div>
  )
}
