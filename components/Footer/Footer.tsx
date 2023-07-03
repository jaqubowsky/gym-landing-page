import Section from "../Section/Section";
import IconsGrid from "./IconsGrid";
import Image from "next/image";
import logo2 from "@/assets/images/logo2.png";

const Footer = () => {
  return (
    <Section id="footer" className="bg-yellow-300">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Masz pytania?</h2>
          <h5>Nasza recepcja czeka na twój telefon.</h5>
          <h2 className="font-bold">503 900 803</h2>
          <h5>
            Palladium Fitness Club{" "}
            <span className="block">ul. Adama Mickiewicza 35c</span>{" "}
            <span className="block">06-100 Pułtusk</span>
          </h5>
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
            <span className="font-bold">Pon.-Pt.</span>
            <span>7:00-22:00</span>
          </div>
          <div className="flex gap-6">
            <span className="font-bold">Sob.-Nd.</span>
            <span>8:00-18:00</span>
          </div>
          <p className="mb-4">recepcja.braingym@op.pl</p>
        </div>
      </div>
      <IconsGrid />
      <h2 className="font-bold text-sm mt-4">
        Copyright © Palladium Fitness Club 2023
      </h2>
    </Section>
  );
};

export default Footer;
