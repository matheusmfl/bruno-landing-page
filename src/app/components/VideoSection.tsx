import Image from 'next/image'
import { CtaButton } from './CtaButton'
import check from '@/assets/checkOrange.svg'

export function VideoSection() {
  return (
    <section className="flex flex-col bg-slate-200 py-8 px-4 gap-10 font-roboto lg:px-32 lg:pt-[250px] lg:py-14">
      <div className="flex flex-col gap-8">
        <h2 className="font-medium text-[24px] text-center lg:text-[32px] leading-[32px] text-amber-600">
          Vantagens em nos escolher para proteger seu patrimônio:
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[10px]">
          <div className="flex gap-3 items-start">
            <Image src={check} alt="Check" />
            <span className="text-[20px] text-slate-600 font-normal">
              Recomendação das melhores práticas alinhadas aos seus interesses;
            </span>
          </div>
          <div className="flex gap-3 items-start">
            <Image src={check} alt="Check" />
            <span className="text-[20px] text-slate-600 font-normal">
              Agilidade processual na resolução do caso que outros escritórios
              demoram meses;
            </span>
          </div>
          <div className="flex gap-3 items-start">
            <Image src={check} alt="Check" />
            <span className="text-[20px] text-slate-600 font-normal">
              Metodologia comprovada por nosso longo histórico de casos de mesma
              procedência;
            </span>
          </div>
        </div>
      </div>
      {/* Div do vídeo */}
      <div className="flex flex-col lg:flex-row">
        <div className="aspect-video w-full bg-video relative">
          <iframe
            title="Video Bruno Silva"
            className="w-full h-full"
            src="https://player.vimeo.com/video/872097003"
          ></iframe>
        </div>

        <div className="flex flex-col lg:gap-6 lg:pt-5 py-8 px-4 gap-4">
          <h2 className="text-amber-600 text-2xl font-medium leading-[28px] pb-2">
            O banco emitiu mandado de busca e apreensão para o seu veículo?
          </h2>

          <span className="text-slate-600 text-base font-normal leading-[24px]">
            Saiba a importância de buscar orientação legal e tomar medidas
            imediatas, especialmente se o veículo já estiver apreendido, para
            maximizar as chances de uma recuperação bem-sucedida
          </span>

          <CtaButton />
        </div>
      </div>
    </section>
  )
}
