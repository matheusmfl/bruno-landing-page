import Image from 'next/image'
import bgRotate from '@/assets/rotate-bg.png'
import { CardsWithIconsComponent } from './CardsWithIconsComponent'

export function CardWithIconSession() {
  return (
    <>
      <div className="py-10 px-6 relative lg:py-28 lg:px-44 flex items-center bg-[#08254F]">
        <div className="lg:grid lg:grid-cols-3 lg:gap-20 flex flex-col gap-10 w-full">
          <h1 className="font-medium text-[32px] lg:text-5xl leading-tight text-amber-500">
            O que mais podemos fazer por você!
          </h1>
          <CardsWithIconsComponent
            type="car"
            subtitle="Evitamos a perda do veículo e seus impactos financeiros."
            title="Preserve seu Patrimônio"
          />

          <CardsWithIconsComponent
            type="money"
            title="Evite Custos Adicionais"
            subtitle="Evitamos litígios prolongados, multas e taxas desnecessárias."
          />

          <CardsWithIconsComponent
            type="balance"
            subtitle="Condições de pagamento mais vantajosas, alinhadas à sua situação financeira."
            title="Negociações Favoráveis"
          />

          <CardsWithIconsComponent
            type="umbrella"
            subtitle="Preserve seu histórico de crédito mantendo a capacidade de obter crédito no futuro."
            title="Minimize Danos ao Crédito"
          />

          <CardsWithIconsComponent
            type="papers"
            subtitle="Orientação preventiva para situações futuras, resultando em economia a longo prazo."
            title="Orientação para o Futuro"
          />
        </div>

        <div className="absolute bottom-0 right-0 z-10">
          <Image src={bgRotate} alt="Logo Bruno" />
        </div>
      </div>
    </>
  )
}
