import PageHeader from "../components/ui/PageHeader"
import ScrollingTicker from "../components/sections/shared/ScrollingTicker"
import VideoGalleryGrid from "../components/sections/gallery/VideoGalleryGrid"
import VideoModal from "../components/ui/VideoModal"
import { galleryImages, galleryVideoId } from "@/data/gallery"


const VideoGallery = () => {
  return (
    <>
      <PageHeader title="Video" accent="Gallery" current="Video Gallery" />
      <ScrollingTicker />
      <VideoGalleryGrid />
    </>
  )
}

export default VideoGallery
