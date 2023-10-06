'use client'
import * as Accordion from '@radix-ui/react-accordion'
import { BiSolidChevronDown } from 'react-icons/bi'

export function AccordionComponent() {
  return (
    <>
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="item-1" className="group">
          <Accordion.Header className="bg-slate-100 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:bg-slate-800 py-[22px] px-[20px] shadow-xl  flex gap-[18px] items-center justify-center">
            <span className="text-slate-700 group-data-[state=open]:text-orange-300 font-roboto text-xl font-medium leading-[24px]">
              O QUE EU DEVO FAZER PARA RECUPERAR O MEU VEÍCULO?
            </span>

            <Accordion.Trigger className="h-full group text-orange-300">
              <BiSolidChevronDown className="text-slate-700 w-[24px] ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:text-orange-300 rotate-0 group-data-[state=open]:rotate-180 h-[24px]" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="bg-slate-100 shadow-md overflow-hidden py-4 px-6 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <span className="font-roboto text-slate-700 font-medium text-xl leading-[28px]">
              É fundamental RECORRER no processo com a orientação de um
              advogado. Mesmo que o seu veículo já tenha sido apreendido, o
              prazo está correndo, e as possibilidades de recuperação imediata
              são substanciais.
            </span>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  )
}
