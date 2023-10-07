import { CtaButton } from './CtaButton'
// import ReactPlayer from 'react-player/youtube'

export function VideoSection() {
  return (
    <section className="flex flex-col bg-slate-200 py-8 px-4 gap-4 font-roboto lg:flex-row lg:px-32 lg:py-14">
      {/* <Image
        src={thumb}
        alt="thumb de video"
        width={545}
        height={362}
        className="aspect-square object-contain object-left-top"
      /> */}
      {/* Div do vídeo */}
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full"
          src="https://player.vimeo.com/video/872097003"
        ></iframe>
      </div>

      <div className="lg:flex lg:flex-col lg:gap-6 lg:pt-5">
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
    </section>
  )
}
