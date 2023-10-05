import { CardSection } from './components/CardSection'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { VideoSection } from './components/VideoSection'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <VideoSection />
      <CardSection />
    </>
  )
}
