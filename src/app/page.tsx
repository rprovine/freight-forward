import Hero from "./components/Hero"
import ComprehensiveSolution from "./components/ComprehensiveSolution"
import JonesAct from "./components/JonesAct"
import Services from "./components/Services"
import Routes from "./components/Routes"
import Statistics from "./components/Statistics"
import CallToAction from "./components/CallToAction"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <ComprehensiveSolution />
      <JonesAct />
      <Services />
      <Routes />
      <Statistics />
      <CallToAction />
    </main>
  )
}

