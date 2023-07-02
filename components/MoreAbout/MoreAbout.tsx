import ButtonLink from "../ButtonLink";
import Button from "../ButtonLink";
import Section from "../Section/Section";

const MoreAbout = () => {
  return (
    <Section id="more" className="bg-neutral-500">
      <h2 className="text-4xl text-center font-bold mb-8 text-neutral-800 drop-shadow-sm">
        Nie tylko{" "}
        <span className="text-yellow-300 drop-shadow-sm">siłownia</span>
      </h2>
      <p className="text-white drop-shadow-sm mb-6">
        Odkryj różnorodność i emocje w{" "}
        <span className="text-yellow-300 drop-shadow-sm">
          Palladium Fitness Club
        </span>
        ! U nas znajdziesz nie tylko siłownię, ale także szereg innych
        aktywności, takich jak boks, zajęcia taneczne, funkcjonalne ciało, muay
        thai, speedball i interval class. Dołącz do nas już teraz i ciesz się
        pasją, wyzwaniami i radością, jakie oferuje nasze klubowe doświadczenie
        fitness!
      </p>
      <ButtonLink href="/schedule" className="bg-yellow-300">Plan zajęć</ButtonLink>
    </Section>
  );
};

export default MoreAbout;
