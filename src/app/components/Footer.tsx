import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { PiMapPinDuotone } from 'react-icons/pi'

export function Footer() {
  return (
    <footer className="flex flex-col gap-5 py-8 px-4 border-t-2 border-white bg-slate-900 lg:px-32 lg:py-14">
      <div className="flex flex-col gap-3 lg:flex-row lg:w-full lg:justify-between">
        <div className="flex gap-2">
          <AiOutlineMail className="w-[24px] h-[24px] text-[#FDBA74]" />
          <span className="text-slate-50 font-roboto text-base font-normal">
            advbrunosilva@outlook.com
          </span>
        </div>
        <div className="flex gap-2">
          <AiOutlineWhatsApp className="w-[24px] h-[24px] text-[#FDBA74]" />
          <span className="text-slate-50 font-roboto text-base font-normal">
            86 99567 - 6008
          </span>
        </div>

        <div className="flex gap-2">
          <PiMapPinDuotone className="w-[24px] h-[24px] text-[#FDBA74]" />
          <span className="text-slate-50 font-roboto text-base font-normal">
            Rua Dez - (Parque Karina), <br className="lg:hidden " /> Boa
            Esperança, <br />
            Timon - MA - CEP 65636-835
          </span>
        </div>
      </div>
      <span className="text-orange-300 text-base font-roboto font-normal leading-[24px] text-center">
        © 2023 Bruno Silva - Advocacia. Todos os direitos reservados
      </span>
    </footer>
  )
}
