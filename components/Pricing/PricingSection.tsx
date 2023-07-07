import { FC } from "react"
import Section from "../Section/Section"

interface PricingSection {
  children: React.ReactNode
}

const PricingSection: FC<PricingSection> = ({children}) => {
  return(
    <Section className="bg-neutral-800">
      {children}
    </Section>
  )
}

export default PricingSection;