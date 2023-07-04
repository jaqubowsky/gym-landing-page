import ButtonLink from "../ButtonLink";
import Section from "../Section/Section";
import background from "../../assets/images/bg.jpg";

const Header = () => {
  return (
    <Section
      id="header"
      className="h-3/4 text-2xl bg-center bg-fixed bg-no-repeat bg-cover bg-yellow-300"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <div className="bg-trBlack px-6 md:px-12 lg:px-20 py-12 rounded-xl drop-shadow-md">
        <h1 className="mb-6 text-5xl drop-shadow-xl uppercase font-bold text-yellow-300 break-words">
          Palladium fitness<span className=" text-gray-100 block">Club</span>
        </h1>
        <h5 className="drop-shadow-xl text-white mb-10">
          Najlepsza siłownia w Pułtusku
        </h5>
        <ButtonLink href="/pricing" intent="yellow" size="large">
          Dołącz
        </ButtonLink>
      </div>
    </Section>
  );
};

export default Header;
