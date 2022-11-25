// packages
import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0'

// types
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
