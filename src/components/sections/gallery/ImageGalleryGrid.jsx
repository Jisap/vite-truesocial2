import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import Reveal from "../../ui/Reveal"
import { galleryImages } from "@/data/gallery"



const ImageGalleryGrid = () => {

  const [index, setIndex] = useState(-1);

  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom grid grid-cols-2 gap-6 lg:grid-cols-3">
          {galleryImages.map((image, i) => (
            <Reveal
              key={image.id}
              delay={(i % 3) * 0.2}
              className="img-shine aspect-square overflow-hidden rounded-[20px]"
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="block h-full w-full"
              >
                <img
                  src={image.src}
                  alt={`Gallery phone ${image.id}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={galleryImages.map((image) => ({ src: image.src }))}
        />
      </section>
    </>
  )
}

export default ImageGalleryGrid