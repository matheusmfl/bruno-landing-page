import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-[1366px] mx-auto bg-slate-600">{children}</div>
}
