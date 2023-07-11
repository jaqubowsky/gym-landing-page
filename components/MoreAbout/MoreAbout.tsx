import ButtonLink from "../ButtonLink";
import Section from "../Section/Section";
import Image from "next/image";

const MoreAbout = () => {
  return (
    <Section id="more" className="bg-neutral-600" innerStyle="md:max-w-4xl">
      <h2 className="text-6xl text-center font-bold mb-8 text-white drop-shadow-sm">
        Nie tylko <span className="text-yellow-300">siłownia</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
        <div className="mb-2 md:w-1/2 md:text-3xl flex md:items-center">
          <p className="text-gray-100 mb-6 font-semibold md:font-normal">
            Odkryj różnorodność i emocje w Palladium Fitness Club! U nas
            znajdziesz nie tylko siłownię, ale także szereg innych aktywności,
            takich jak boks, zajęcia taneczne, funkcjonalne ciało, muay thai,
            speedball i interval class. Dołącz do nas już teraz i ciesz się
            pasją, wyzwaniami i radością, jakie oferuje nasze klubowe
            doświadczenie fitness!
          </p>
        </div>
        <div className="flex-1 max-w-[350px] mb-6">
          <Image
            src="https://res.cloudinary.com/doz2peb5r/image/upload/f_auto,q_auto/jwbpikzgvu4c4cge5g7y"
            alt="Paweł Brejnak"
            className="object-contain h-full w-full"
            height={350}
            width={350}
          />
        </div>
      </div>
      <ButtonLink
        href="/schedule"
        intent="yellow"
        hover="white"
        size="large"
        className="w-3/4"
      >
        Plan zajęć
      </ButtonLink>
    </Section>
  );
};

export default MoreAbout;
