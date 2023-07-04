import ButtonLink from "../ButtonLink";
import about from "../../assets/images/about.png";
import Section from "../Section/Section";
import Image from "next/image";

const MoreAbout = () => {
  return (
    <Section id="more" className="bg-neutral-500" innerStyle="md:max-w-4xl">
      <h2 className="text-6xl text-center font-bold mb-8 text-neutral-800 drop-shadow-sm">
        Nie tylko{" "}
        <span className="text-yellow-300 drop-shadow-sm">siłownia</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="mb-6 md:w-1/2 md:text-3xl flex md:items-center">
          <p className="text-white drop-shadow-sm mb-6">
            Odkryj różnorodność i emocje w{" "}
            <span className="text-yellow-300 drop-shadow-sm">
              Palladium Fitness Club
            </span>
            ! U nas znajdziesz nie tylko siłownię, ale także szereg innych
            aktywności, takich jak boks, zajęcia taneczne, funkcjonalne ciało,
            muay thai, speedball i interval class. Dołącz do nas już teraz i
            ciesz się pasją, wyzwaniami i radością, jakie oferuje nasze klubowe
            doświadczenie fitness!
          </p>
        </div>
        <div className="flex-1 max-w-[350px] mb-6">
          <Image
            src={about}
            alt="Paweł Brejnak"
            className="object-contain h-full w-full"
          />
        </div>
      </div>
      <ButtonLink href="/schedule" className="bg-yellow-300 w-full md:w-1/2">
        Plan zajęć
      </ButtonLink>
    </Section>
  );
};

export default MoreAbout;
