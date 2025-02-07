import ScheudleGrid from "@/components/Schedule/Schedule";
import Section from "@/components/Section/Section";

export default function Scheudle() {
  return (
    <Section id="scheudle">
      <h2 className="text-6xl font-bold mb-4">Grafik</h2>
      <h5 className="font-bold mb-8">
        Jesteśmy dostępni dla ciebie cały tydzień!
      </h5>
      <ScheudleGrid />
    </Section>
  );
}
