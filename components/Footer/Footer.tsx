import Section from "../Section/Section";
import IconsGrid from "./IconsGrid";
import Image from "next/image";
import logo2 from "@/assets/images/logo2.png";

const Footer = () => {
  return (
    <Section id="footer" className="bg-yellow-300">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <strong>Masz pytania?</strong>
          <span>Nasza recepcja czeka na twój telefon.</span>
          <strong>503 900 803</strong>
          <span>
            Palladium Fitness Club{" "}
            <span className="block">ul. Adama Mickiewicza 35c</span>{" "}
            <span className="block">06-100 Pułtusk</span>
          </span>
        </div>
        <div>
          <Image
            className="bg-black rounded-full my-4 h-full w-full"
            src={logo2}
            width={200}
            height={200}
            alt="logo2"
          />
        </div>
        <div className="flex items-center flex-col gap-2">
          <div className="flex gap-6">
            <strong>Pon.-Pt.</strong>
            <span>7:00-22:00</span>
          </div>
          <div className="flex gap-6">
            <strong >Sob.-Nd.</strong>
            <span>8:00-18:00</span>
          </div>
          <span className="mb-4">recepcja.braingym@op.pl</span>
        </div>
      </div>
      <IconsGrid />
      <span className="font-bold text-sm mt-4">
        Copyright &#169; Palladium Fitness Club 2023
      </span>
    </Section>
  );
};

export default Footer;
