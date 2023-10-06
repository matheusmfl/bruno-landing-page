import { AccordionComponent } from './Accordion'

export function AccordionSection() {
  return (
    <section className="py-8 px-4 flex flex-col gap-4 bg-slate-100">
      <h2 className="text-amber-600 font-roboto text-[24px] font-medium leading-[44px]">
        Dúvidas frequentes
      </h2>

      {/* Accordion */}
      <div>
        <AccordionComponent />
      </div>
    </section>
  )
}
