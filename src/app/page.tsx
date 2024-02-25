import { AboutMeSection } from './components/AboutMeSection'
import { AccordionSection } from './components/AccordionSection'
import { CardSection } from './components/CardSection'
import { CardWithIconSession } from './components/CardsWithIconSession'
import { FeedbackSection } from './components/FeedbackSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HeroCards } from './components/HeroCards'
import { VideoSection } from './components/VideoSection'

export default function Home() {
  return (
    <>
      <Header />
      <div className="lg:relative">
        <Hero />
        <div className="lg:absolute lg:inset-x-0 lg:top-1/2 lg:transform lg:-translate-y-2/4">
          <HeroCards />
        </div>
        <VideoSection />
      </div>
      <CardWithIconSession />
      <AccordionSection />
      <FeedbackSection />
      <AboutMeSection />
      <Footer />
    </>
  )
}
