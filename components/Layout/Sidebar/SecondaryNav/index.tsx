import { communities } from '../../../../data.test'

const SecondaryNav = () => {
  return (
    <div className='pt-10'>
      <p
        className='px-3 text-sm font-medium text-aqua'
        id='communities-headline'
      >
        My Tournaments
      </p>
      <div className='mt-3 space-y-2' aria-labelledby='communities-headline'>
        {communities.map((community) => (
          <a
            key={community.name}
            href={community.href}
            className='group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-yellow hover:text-gray-900'
          >
            <span className='truncate'>{community.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SecondaryNav
