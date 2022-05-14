import Feature from '../components/Feature'
import Footer from '../components/Footer'
import Free from '../components/Free'
import FreeMeal from '../components/FreeMeal'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Parallax from '../components/Parallax'
import Partition from '../components/Partition'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partition />
      <Feature />

      <Free />
      <Parallax />
      <FreeMeal />
      <Footer />
    </div>
  )
}
