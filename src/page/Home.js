import Hero from "../components/Hero"
import FeatureItem from "../components/FeatureItem"
import chat from "../assets/icon-chat.png"
import money from "../assets/icon-money.png"
import security from "../assets/icon-security.png"
import { Fragment } from "react"

function Home() {
  return (
    <Fragment>
      <Hero />
      <section className="features">
        <FeatureItem
          icon={chat}
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          icon={money}
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          icon={security}
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </Fragment>
  )
}

export default Home
