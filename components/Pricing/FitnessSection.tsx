import Pass from "./Pass";

const passes = [
  {
    price: 115,
    benefits: [
      "4 wejścia",
      "Ważny we wszystkich klubach",
      "Wstęp na fitness / joga",
    ],
  },
  {
    price: 155,
    benefits: [
      "8 wejśc",
      "Ważny we wszystkich klubach",
      "Wstęp na fitness / joga",
    ],
  },
  {
    price: 175,
    benefits: [
      "12 wejśc",
      "Ważny we wszystkich klubach",
      "Wstęp na fitness / joga",
    ],
  },
  {
    price: 195,
    benefits: [
      "16 wejść",
      "Ważny we wszystkich klubach",
      "Wstęp na fitness / joga",
    ],
  },
];

const GymSection = () => {
  const passesEl = passes.map((pass) => {
    return (
      <Pass passPrice={pass.price} benefits={pass.benefits} key={pass.price} />
    );
  });

  return (
    <>
      <h5 className="text-gray-300 text-sm mt-2 mb-8">
        Zakup możliwy tylko stancjonarnie przy recepcji.
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {passesEl}
      </div>
    </>
  );
};

export default GymSection;
