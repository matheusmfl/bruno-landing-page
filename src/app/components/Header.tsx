import Image from 'next/image'
import whatsapp from '@/assets/whatsapp.svg'
import logo from '@/assets/logo.svg'
import { IoMailOutline } from 'react-icons/io5'
import { BiLogoWhatsapp } from 'react-icons/bi'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex flex-col gap-2 lg:px-32 lg:py-5 font-normal text-slate-50 text-xs items-center lg:flex-row lg:justify-between lg:w-full justify-center px-4 py-2 bg-[#08254F] font-roboto">
      {/* Whatsapp Fixed */}
      <Link
        className="fixed bottom-3 right-3 animate-bounce z-50"
        href={
          'https://wa.me/5518991087902?text=Dr.+Bruno+Silva%2C+preciso+de+ajuda+com+meu+ve%C3%ADculo%C2%A0URGENTE%21%21'
        }
      >
        <Image src={whatsapp} alt="Clicke aqui e fale conosco whatsapp" />
      </Link>

      <Image src={logo} alt="Logo" />
      {/* Div Links */}
      <div className="flex w-full items-center justify-center lg:justify-end gap-2">
        {/* Mail Div */}
        <div className="flex gap-1 items-center">
          <IoMailOutline className="text-orange-300 text-base lg:text-2xl" />
          <Link href={'mailto:advbrunosilva@outlook.com'}>
            <span className="lg:text-lg">advbrunosilva@outlook.com</span>
          </Link>
        </div>

        <div className="flex gap-1 items-center">
          <BiLogoWhatsapp className="text-orange-300 text-base lg:text-2xl" />
          <Link
            href={
              'https://wa.me/5518991087902?text=Dr.+Bruno+Silva%2C+preciso+de+ajuda+com+meu+ve%C3%ADculo%C2%A0URGENTE%21%21'
            }
          >
            <span className="lg:text-lg">18 99108 - 7902</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
