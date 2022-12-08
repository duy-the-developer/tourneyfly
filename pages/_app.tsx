// packages
import { UserProvider } from '@auth0/nextjs-auth0'
import '../styles/globals.css'

// types
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

export type NextPageWithLayouyt<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayouyt
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page)
	return (
		<UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>
	)
}
