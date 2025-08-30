import Header2 from "../components/Header2"
import StorySection from "../components/StorySection"
import CountdownTimer from "../components/CountdownTimer"
import ItinerarySection from "../components/ItinerarySection"
import DressCodeSection from "../components/DressCodeSection"
import RecommendationsSection from "../components/RecommendationsSection"
import GiftRegistrySection from "../components/GiftRegistrySection"


export default function Home() {
  return (
    <main>
      <Header2/>
      <StorySection/>
      <CountdownTimer />
      <ItinerarySection />
      <DressCodeSection />
      <RecommendationsSection />
      <GiftRegistrySection />
    </main>
  )
}
