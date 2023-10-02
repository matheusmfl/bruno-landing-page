import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { IoMailOutline } from 'react-icons/io5'
import { BiLogoWhatsapp } from 'react-icons/bi'

export function Header() {
  return (
    <header className="flex flex-col gap-2 font-normal text-slate-50 text-xs items-center justify-center px-4 py-2 bg-slate-900 font-roboto">
      <Image src={logo} alt="Logo" />
      {/* Div Links */}
      <div className="flex w-full items-center justify-center gap-2">
        {/* Mail Div */}
        <div className="flex gap-1 items-center">
          <IoMailOutline className="text-orange-300 text-base" />
          <span>advbrunosilva@outlook.com</span>
        </div>

        <div className="flex gap-1 items-center">
          <BiLogoWhatsapp className="text-orange-300 text-base" />
          <span>86 99567 - 6008</span>
        </div>
      </div>
    </header>
  )
}
