import Link from 'next/link'

const Logo = () => {
  return (
    <div className='flex flex-shrink-0 items-center'>
      <Link href='/'>
        <h1 className='text-2xl text-orange'>TOURNEYFLY</h1>
      </Link>
    </div>
  )
}

export default Logo
