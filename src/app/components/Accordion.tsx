'use client'
import * as Accordion from '@radix-ui/react-accordion'
import { BiSolidChevronDown } from 'react-icons/bi'
import { faq } from '../utils/faq'

interface ItemsProps {
  id: number
  title: string
  content: Array<string>
}

export function AccordionComponent() {
  const items: ItemsProps[] = faq
  return (
    <>
      <Accordion.Root type="single" collapsible>
        <div className="flex flex-col gap-3">
          {items.map((item) => {
            return (
              <Accordion.Item
                value={`item-${item.id}`}
                className="group"
                key={item.id}
              >
                <Accordion.Header className="bg-slate-100  transition-transform group-data-[state=open]:bg-slate-800 py-[22px] px-[20px] shadow-xl  flex gap-[18px] items-center justify-center">
                  <span className="text-slate-700 group-data-[state=open]:text-orange-300 transition-colors duration-300 font-roboto text-xl font-medium leading-[24px]">
                    {item.title}
                  </span>

                  <Accordion.Trigger className="h-full group text-orange-300">
                    <BiSolidChevronDown className="text-slate-700 w-[24px] ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:text-orange-300 rotate-0 group-data-[state=open]:rotate-180 h-[24px]" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="bg-slate-100 shadow-md overflow-hidden py-4 px-6 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <span className="font-roboto text-slate-700 font-medium text-xl leading-[28px]">
                    {item.content}
                  </span>
                </Accordion.Content>
              </Accordion.Item>
            )
          })}
        </div>
      </Accordion.Root>
    </>
  )
}
