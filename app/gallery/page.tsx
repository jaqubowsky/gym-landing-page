import Section from "@/components/Section/Section";
import { Lightbox } from "@/components/Lightbox";
import { Suspense } from "react";
import { mapImageResources, search } from "@/lib/cloudinary";

export default async function GalleryPage() {
  const { resources } = await search({
    expression: 'folder="gallery" AND resource_type="image"',
    direction: "desc",
  });

  const images = mapImageResources(resources);

  return (
    <>
      <Section id="" className="bg-yellow-300">
        <h4 className="font-bold text-5xl drop-shadow-md">Galeria</h4>
      </Section>
      <Section id="gallery">
        <Suspense fallback={<div>Loading...</div>}>
          {images.length > 0 ? (
            <Lightbox imagesArr={images} />
          ) : (
            <h3>Brak zdjęć w naszej galerii...</h3>
          )}
        </Suspense>
      </Section>
    </>
  );
}
