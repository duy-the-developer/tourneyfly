import { parseISO, format } from 'date-fns'

import type { TArticle } from '../../pages/types'
const Headlines = ({ articles }: { articles: TArticle[] }) => {
  return (
    <ul className='bg-slate-900 rounded-lg'>
      {articles.map((each) => {
        const { publishedAt, title, url, urlToImage } = each

        return (
          <li key={url} className='flex items-center space-x-6 px-4 py-4'>
            <img
              src={urlToImage}
              alt={title}
              className='h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center'
            />
            <div className='flex-col space-y-1'>
              <p className='text-aqua line-clamp-2'>{title}</p>
              <p className='text-sm flex-none font-medium text-gray-200'>
                {format(parseISO(publishedAt), 'PPpp')}
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Headlines
