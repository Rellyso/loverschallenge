import { CategoriesSection } from './components/CategoriesSection'
import { Hero } from './components/Hero'
import { NewEditionSection } from './components/NewEditionSection'
import { WodsSection } from './components/WodsSection'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <NewEditionSection />
      <CategoriesSection />
      <WodsSection />
    </div>
  )
}
