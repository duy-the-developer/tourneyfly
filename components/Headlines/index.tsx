import { parseISO, format } from 'date-fns'
import Link from 'next/link'

import type { TArticle } from '../../types/TArticle'
const Headlines = ({ articles }: { articles: TArticle[] }) => {
  return (
    <ul className='bg-slate-900 bg-opacity-50 rounded-lg'>
      {articles.map((each) => {
        const { publishedAt, title, url, urlToImage } = each

        return (
          <li key={url}>
            <Link
              href={url}
              className='transition flex items-center space-x-6 px-4 py-4 cursor-pointer hover:bg-purple hover:-translate-y-1 rounded-lg group'
              target='_blank'
            >
              <img
                src={urlToImage}
                alt={title}
                className='truncate h-20 w-20 flex-none rounded-md bg-gray-100 object-cover object-center'
              />
              <div className='flex-col space-y-1'>
                <p className='text-gray-200 line-clamp-2'>{title}</p>
                <p className='text-sm flex-none font-medium text-gray-400'>
                  {format(parseISO(publishedAt), 'PPpp')}
                </p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Headlines
