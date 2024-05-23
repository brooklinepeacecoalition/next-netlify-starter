import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Yes on 19!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Yes on 19!" />
        <p className="description">
          1. Select your precinct</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
