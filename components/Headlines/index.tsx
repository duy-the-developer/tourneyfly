import { useEffect, useState } from 'react'
import { parseISO, format } from 'date-fns'

type TArticle = {
  author: string
  content: string
  description: string
  publishedAt: string
  source: {
    id: string | null
    name: string
  }
  title: string
  url: string
  urlToImage: string
}

const Headlines = () => {
  const [articles, setArticles] = useState<TArticle[] | null>(null)
  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=gb&category=sports&pageSize=10&apiKey=f6b58af0a5124be2bf14ae6aaad10d6d'
    )
      .then((res) => res.json())
      .then((parsedRes) => {
        console.log(parsedRes)
        setArticles(parsedRes.articles)
      })
  }, [])

  if (articles) {
    return (
      <ul className='bg-purple rounded-lg'>
        {articles.map((each) => {
          const {
            author,
            content,
            description,
            publishedAt,
            title,
            url,
            urlToImage,
          } = each

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

  return <p>Loading...</p>
}

export default Headlines
