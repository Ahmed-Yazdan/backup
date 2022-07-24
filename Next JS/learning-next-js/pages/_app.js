import React, {useState} from "react"
import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [a, setA] = useState("Hello")
  return (
    <>
    <nav>
      <div>
        <Link href='/'>
        <a>Kitchen</a>
        </Link><Link href='/'>
        <a>{a}</a>
        </Link>
      </div>
    </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
