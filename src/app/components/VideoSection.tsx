import Image from 'next/image'
import thumb from '@/assets/thumb.jpeg'
import { CtaButton } from './CtaButton'

export function VideoSection() {
  return (
    <section className="flex flex-col bg-slate-200 py-8 px-4 gap-4 font-roboto">
      <Image src={thumb} alt="thumb de video" />
      <h2 className="text-amber-600 text-2xl font-medium leading-[28px] pb-2">
        O banco emitiu mandato de busca e apreensão para o seu veículo?
      </h2>

      <span className="text-slate-600 text-base font-normal leading-[24px]">
        Saiba a importância de buscar orientação legal e tomar medidas
        imediatas, especialmente se o veículo já estiver apreendido, para
        maximizar as chances de uma recuperação bem-sucedida
      </span>

      <CtaButton />
    </section>
  )
}
