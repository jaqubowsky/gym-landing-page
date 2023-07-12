import ButtonLink from "../ButtonLink";
import Section from "../Section/Section";

const Header = () => {
  return (
    <Section
      id="header"
      className="h-[80vh] text-2xl bg-center md:bg-fixed bg-no-repeat bg-cover bg-yellow-300"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/doz2peb5r/image/upload/f_auto,q_auto/daq6hns1uhsykhy8oytn")`,
      }}
    >
      <div className="bg-trBlack px-6 md:px-12 lg:px-20 py-12 rounded-xl drop-shadow-md flex flex-col">
        <h1 className="mb-6 text-5xl drop-shadow-xl uppercase font-bold text-yellow-300 break-words">
          Palladium fitness<span className=" text-gray-100 block">Club</span>
        </h1>
        <span className="drop-shadow-xl text-white mb-10">
          Najlepszy klub fitness w Pułtusku
        </span>
        <ButtonLink href="/pricing" intent="yellow" size="large">
          Dołącz
        </ButtonLink>
      </div>
    </Section>
  );
};

export default Header;
