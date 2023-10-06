'use client'
import * as Accordion from '@radix-ui/react-accordion'
import { BiSolidChevronDown } from 'react-icons/bi'

export function AccordionComponent() {
  return (
    <>
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="1">
          <Accordion.Header className="bg-slate-800 py-[22px] px-[20px]  flex gap-[18px] items-center justify-center">
            <span className="text-orange-300 font-roboto text-xl font-medium leading-[24px]">
              O QUE EU DEVO FAZER PARA RECUPERAR O MEU VEÍCULO?
            </span>

            <Accordion.Trigger className="h-full text-orange-300">
              <BiSolidChevronDown className="text-orange-300 w-[24px] h-[24px]" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="bg-slate-100 shadow-md py-4 px-6">
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
