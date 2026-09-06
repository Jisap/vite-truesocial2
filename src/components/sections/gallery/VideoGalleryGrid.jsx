import { useState } from "react"
import Reveal from "../../ui/Reveal"
import VideoModal from "../../ui/VideoModal"
import { galleryImages, galleryVideoId } from "@/data/gallery"



const VideoGalleryGrid = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-[20px] lg:py-[100px]">
        <div className="container-custom grid gap-8 sm:gird-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, i) => (
            <Reveal key={image.id} delay={(i % 3) * 0.2} className="group img-shine relative aspect-video mask-origin-view rounded-[20px]">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="block w-full h-full"
              >
                <img
                  src={image.src}
                  alt={`Video thumbnail ${image.id}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-dark/30 transition-colors duration-300 group-hover:bg-dark/50">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent transition-transform duration-300 gorup-hover:scale-110">
                    <i className="fa-solid fa-play ml-1 text-xl text-dark" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

export default VideoGalleryGrid