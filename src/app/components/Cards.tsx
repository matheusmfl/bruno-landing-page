import Image from 'next/image'
import icon1 from '@/assets/icon1.svg'
import icon2 from '@/assets/icon2.svg'
import icon3 from '@/assets/icon3.svg'

interface CardsProps {
  title: string
  iconProps: 1 | 2 | 3
  description: string
}

export function Cards({ title, iconProps, description }: CardsProps) {
  let icon

  if (iconProps === 1) {
    icon = icon1
  } else if (iconProps === 2) {
    icon = icon2
  } else {
    icon = icon3
  }
  return (
    <div className="py-5 px-4 flex flex-col lg:py-5 lg:px-10 gap-[10px] rounded-lg bg-slate-800 border border-gray-600 shadow-md">
      {/* title + icon */}
      <div className="flex gap-[10px]">
        <Image src={icon} alt="ícone" />
        <div className="flex items-center">
          <span className="font-roboto text-xl text-slate-50 font-semibold text-center leading-[28px]">
            {title}
          </span>
        </div>
      </div>

      {/* Divisor */}
      <div className="h-[3px] w-[140px] bg-amber-600 shadow-xl" />

      {/* Div com texto */}

      <span className="font-roboto text-xl text-slate-50 font-normal leading-[28px]">
        {description}
      </span>
    </div>
  )
}
