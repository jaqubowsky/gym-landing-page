import ButtonLink from "../ButtonLink";
import Section from "../Section/Section";

const Header = () => {
  return (
    <Section id="header" className="bg-yellow-300 uppercase h-1/2">
      <h1 className="mb-6 text-5xl drop-shadow-xl font-bold text-neutral-800">
        Palladium fitness<span className=" text-gray-100 block">Club</span>
      </h1>
      <ButtonLink href="/" className="text-xl bg-white">DOWIEDZ SIE WIECEJ</ButtonLink>
    </Section>
  );
};

export default Header;
