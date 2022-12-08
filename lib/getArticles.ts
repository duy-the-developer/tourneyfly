export const getArticles = async () => {
	const { articles } = await fetch(
		`https://newsapi.org/v2/top-headlines?country=gb&category=sports&pageSize=10&apiKey=${process.env.NEWSAPI_KEY}`
	).then((res) => res.json())

	return articles
}
