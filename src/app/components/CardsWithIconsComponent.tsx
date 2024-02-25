import carIcon from '@/assets/icons-cards/car.svg'
import moneyIcon from '@/assets/icons-cards/money.svg'
import balanceIcon from '@/assets/icons-cards/balance.svg'
import umbrellaIcon from '@/assets/icons-cards/umbrella.svg'
import papersIcon from '@/assets/icons-cards/papers.svg'
import Image from 'next/image'

interface ICardsProps {
  type: 'car' | 'money' | 'balance' | 'umbrella' | 'papers'
  title: string
  subtitle: string
}

const iconMap: Record<ICardsProps['type'], string> = {
  car: carIcon,
  balance: balanceIcon,
  money: moneyIcon,
  umbrella: umbrellaIcon,
  papers: papersIcon,
}

export function CardsWithIconsComponent({
  type,
  subtitle,
  title,
}: ICardsProps) {
  return (
    <div className="border-[4px] relative border-slate-400 py-[45px] rounded-md flex flex-col gap-6 px-6">
      <h2 className="text-[20px] leading-6 font-bold text-center">{title}</h2>
      <span className="text-[20px] leading-6 font-medium text-center">
        {subtitle}
      </span>

      <div className="absolute -top-10 left-10">
        <Image src={iconMap[type]} alt={'icon'} />
      </div>
    </div>
  )
}
