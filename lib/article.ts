export async function getArticlesData() {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines?country=gb&category=sports&pageSize=10&apiKey=f6b58af0a5124be2bf14ae6aaad10d6d'
  )
  return res.json()
}
