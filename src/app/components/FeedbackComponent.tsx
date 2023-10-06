import { AiFillStar } from 'react-icons/ai'
import { FaGoogle } from 'react-icons/fa'

interface IFeedbacksProps {
  name: string
  stars: number
  description: string
}
export function FeedbackComponent({
  name,
  stars,
  description,
}: IFeedbacksProps) {
  const starsArray = Array.from({ length: stars })
  return (
    <div className="p-[20px] flex flex-col rounded-lg shadow-xl bg-slate-50 gap-[10px]">
      {/* Div com nome, estrelas e IconGoogle */}
      <div className="flex justify-between">
        {/* Div com estrelas e nome */}
        <div className="flex flex-col">
          <span className="text-slate-900 font-medium text-lg font-roboto ">
            {name}
          </span>

          <div className="flex">
            {starsArray.map((estrela, index) => {
              return <AiFillStar className="text-yellow-300" key={index} />
            })}
          </div>
        </div>
        <FaGoogle className="w-[32px] h-[32px] text-slate-700" />
      </div>

      {/* Div com description */}
      <span className="line-clamp-5 text-slate-900 text-sm font-normal font-roboto leading-[20px]">
        {description}
      </span>
    </div>
  )
}
