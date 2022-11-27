import { ChatBubbleLeftEllipsisIcon, PlusIcon } from '@heroicons/react/20/solid'

import { trendingPosts, whoToFollow } from '../../../data.test'
import TeamCard from './TeamCard'

const Aside = () => {
  // TODO: Refactor this
  return (
    <aside className='hidden xl:col-span-4 xl:block'>
      <div className='sticky top-4 space-y-4'>
        <section aria-labelledby='tournament-details'>
          // TODO: Add Tournament Details
        </section>
        <section aria-labelledby='ranking'></section>
      </div>
    </aside>
  )
}

export default Aside
