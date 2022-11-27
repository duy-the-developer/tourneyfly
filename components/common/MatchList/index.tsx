import { questions } from '../../../data.test'
import Match from './Match'

const ItemList = () => {
  return (
    <div className=''>
      <h1 className='sr-only'>Recent questions</h1>
      <ul role='list' className='space-y-4'>
        {questions.map((question) => (
          <Match question={question} />
        ))}
      </ul>
    </div>
  )
}

export default ItemList
