import Hero from "../components/Hero"
import FeatureItem from "../components/FeatureItem"
import features from "../data/features"

function Home() {
  return (
    <main className="main">
      <Hero />
      <section className="features">
        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} alt={feature.alt} title={feature.title} description={feature.description} />
        ))}
      </section>
    </main>
  )
}

export default Home
