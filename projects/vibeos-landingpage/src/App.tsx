import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Problems } from './components/sections/Problems'
import { Features } from './components/sections/Features'
import { HowItWorks } from './components/sections/HowItWorks'
import { Workflow } from './components/sections/Workflow'
import { Roles } from './components/sections/Roles'
import { CTA } from './components/sections/CTA'

function App() {
  return (
    <div className="min-h-screen bg-vibe-black">
      <Navbar />
      
      <main>
        <Hero />
        <Problems />
        <Features />
        <HowItWorks />
        <Workflow />
        <Roles />
        <CTA />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
