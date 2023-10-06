import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { PiMapPinDuotone } from 'react-icons/pi'

export function Footer() {
  return (
    <footer className="flex flex-col gap-5 py-8 px-4 border-t-2 border-white bg-slate-900">
      <div className="flex flex-col gap-3">
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
            Rua Dez - (Parque Karina), <br /> Boa Esperança, <br />
            Timon - MA - CEP 65636-835
          </span>
        </div>
      </div>
    </footer>
  )
}
