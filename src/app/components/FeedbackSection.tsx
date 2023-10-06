import { FeedbackComponent } from './FeedbackComponent'

export function FeedbackSection() {
  return (
    <section className="px-4 py-8 bg-slate-800 flex flex-col gap-6">
      {/* Title section */}
      <div>
        <h2 className="text-center text-slate-50 font-normal text-3xl font-roboto">
          <strong>4,9</strong> 🌟 <br />
          Avaliações do Google
        </h2>
      </div>

      {/* Container Feedbacks */}
      <div className="flex flex-col gap-3">
        <FeedbackComponent
          name="Robson Maranhão"
          description="Dr. Bruno além de um excelente advogado, é competente e 
          também é um ser humano incrível; Atencioso, escuta o cliente, anota os 
          mínimos detalhes, tira dúvida do cliente, é"
          stars={5}
        />

        <FeedbackComponent
          name="Robson Maranhão"
          description="Dr. Bruno além de um excelente advogado, é competente e 
          também é um ser humano incrível; Atencioso, escuta o cliente, anota os 
          mínimos detalhes, tira dúvida do cliente, é"
          stars={5}
        />

        <FeedbackComponent
          name="Robson Maranhão"
          description="Dr. Bruno além de um excelente advogado, é competente e 
          também é um ser humano incrível; Atencioso, escuta o cliente, anota os 
          mínimos detalhes, tira dúvida do cliente, é"
          stars={5}
        />

        <FeedbackComponent
          name="Robson Maranhão"
          description="Dr. Bruno além de um excelente advogado, é competente e 
          também é um ser humano incrível; Atencioso, escuta o cliente, anota os 
          mínimos detalhes, tira dúvida do cliente, é"
          stars={5}
        />
      </div>
    </section>
  )
}
