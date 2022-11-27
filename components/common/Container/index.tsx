import type { ReactNode } from 'react'

const Container = ({
  children,
  cStyle,
}: {
  children: ReactNode
  cStyle?: string
}) => {
  return (
    <div
      className={`${cStyle} rounded-lg flex items-center justify-center mx-auto max-w-7xl sm:px-6 lg:px-8`}
    >
      {children}
    </div>
  )
}

export default Container
