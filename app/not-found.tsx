import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section/Section";

export default function Custom404() {
  return(
    <Section className="bg-neutral-800 h-3/4">
      <h2 className="font-bold text-6xl text-white mb-6">
        Ta strona nie istnieje!
      </h2>
      <h5 className="font-bold mb-8 lg:text-2xl text-yellow-300">
        Zabłądziłeś?
      </h5>
      <ButtonLink href="/" intent="white" hover="yellow" size="large">
        Wróć na stronę główną
      </ButtonLink>
    </Section>
  )
}