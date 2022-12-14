import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const useRefreshData = (interval: number) => {
	const router = useRouter()
	const refreshData = () => {
		router.replace(router.asPath)
	}

	useEffect(() => {
		const timer = setInterval(() => {
			refreshData()
		}, interval)
		return () => clearInterval(timer)
	}, [])

	return {}
}
