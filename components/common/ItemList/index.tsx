import { ReactNode } from 'react'

const ItemList = ({ children }: { children: ReactNode }) => {
  return (
    <div className=''>
      <h1 className='sr-only'>Recent questions</h1>
      <ul role='list' className='space-y-4'>
        {children}
      </ul>
    </div>
  )
}

export default ItemList
