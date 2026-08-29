import Marquee from "../../ui/Marquee"
import { clientLogos } from "../../../data/clientLogos"


const ScrollingTicker = () => {
  return (
    <div className="relative border-y border-divider py-10">
      <Marquee
        items={clientLogos}
        renderItem={(imgSrc) => (
          <img
            src={imgSrc}
            alt="Client"
            className="logo-force-white h-8 w-auto sm:h-10"
          />
        )}
      />
    </div>
  )
}

export default ScrollingTicker