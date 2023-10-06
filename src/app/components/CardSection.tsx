import { Cards } from './Cards'

export function CardSection() {
  return (
    <section className="bg-slate-800 py-8 px-4 flex flex-col gap-5 lg:px-32 lg:py-14 lg:grid lg:grid-cols-3">
      <Cards
        title="Elaboração da defesa"
        iconProps={1}
        description="Revisamos seu contrato para identificar possíveis práticas predatórias e juros excessivos"
      />
      <Cards
        title="Atendimento especializado"
        iconProps={2}
        description="Negociamos diretamente com o banco em seu nome buscando sempre acordos favoráveis"
      />
      <Cards
        title="Em busca da posse"
        iconProps={3}
        description="Atuamos na sua defesa, interpondo Recursos no Tribunal de Justiça, com o objetivo de derrubar a liminar"
      />
    </section>
  )
}
