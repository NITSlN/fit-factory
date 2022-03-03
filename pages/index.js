import Head from 'next/head'
import Feature from '../components/Feature'
import Free from '../components/Free'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Partition from '../components/Partition'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar />
      <Hero />
      <Partition />
      <Feature />
      <Free/>
    </div>
  )
}
