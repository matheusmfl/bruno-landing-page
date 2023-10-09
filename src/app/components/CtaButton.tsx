import Link from 'next/link'
import { BiLogoWhatsapp } from 'react-icons/bi'

export function CtaButton() {
  return (
    <Link
      href={
        'https://wa.me/5586995676008?text=Dr.+Bruno+Silva%2C+preciso+de+ajuda+com+meu+ve%C3%ADculo%C2%A0URGENTE%21%21'
      }
    >
      <button
        aria-label="Teste"
        className="flex rounded-[4px] gap-[10px] lg:w-[280px] bg-green-700 items-center justify-center w-full py-3 font-roboto text-slate-50 font-medium text-base"
      >
        Quero ajuda especializada{' '}
        <BiLogoWhatsapp className="text-slate-50 text-2xl" />
      </button>
    </Link>
  )
}
