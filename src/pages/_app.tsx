import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import Navbar from 'components/Shared/Navbar'
import type { AppProps } from 'next/app'
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Navbar/>
      <Component {...pageProps} />
    </main>
  )
}
