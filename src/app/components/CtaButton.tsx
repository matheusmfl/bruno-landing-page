import { BiLogoWhatsapp } from 'react-icons/bi'

export function CtaButton() {
  return (
    <button className="flex rounded-[4px] gap-[10px] bg-green-700 items-center justify-center w-full py-3 font-roboto text-slate-50 font-medium text-base">
      Quero ajuda especializada{' '}
      <BiLogoWhatsapp className="text-slate-50 text-2xl" />
    </button>
  )
}
