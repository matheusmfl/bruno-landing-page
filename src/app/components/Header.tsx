import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { LuMailMinus } from 'react-icons/lu'

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center px-4 py-2">
      <Image src={logo} alt="Logo" />
      {/* Div Links */}
      <div className="flex w-full items-center justify-center gap-2">
        {/* Mail Div */}
        <div className="flex gap-1">
          <LuMailMinus />
          <span>advbrunosilva@outlook.com</span>
        </div>
      </div>
    </header>
  )
}
