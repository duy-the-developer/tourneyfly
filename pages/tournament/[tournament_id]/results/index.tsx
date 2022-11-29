import { useRouter } from 'next/router'
import Container from '../../../../components/common/Container'

const TournamentResults = () => {
  const router = useRouter()
  const { tournament_id } = router.query

  console.log(tournament_id)

  return (
    <Container>
      <h1 className='text-aqua text-4xl'>Results Page Coming Soon</h1>
    </Container>
  )
}

export default TournamentResults
