import Section from "@/components/Section/Section";
import { Lightbox } from "@/components/Lightbox";
import { mapImageResources, search } from "@/lib/cloudinary";

const res = search({
  expression: 'folder="gallery" AND resource_type="image"',
  direction: "desc",
});

export default async function GalleryPage() {
  const { resources } = await res;
  
  const imagesArr = mapImageResources(resources);

  return (
    <>
      <Section id="" className="bg-yellow-300">
        <h4 className="font-bold text-5xl drop-shadow-md">Galeria</h4>
      </Section>
      <Section id="gallery" innerStyle="md:max-w-6xl">
        <Lightbox imagesArr={imagesArr} />
      </Section>
    </>
  );
}
