import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"


gsap.registerPlugin(ScrollTrigger)

const RevealImage = ({
  src,
  alt = "",
  className = ""
}) => {

  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { triggr: container, start: "top 85%" },
      });
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, { duration: 1, xPercent: -100, ease: "power2.out" })
      tl.from(
        image,
        { duration: 1, xPercent: 100, ease: "power2.out" },
        "<"
      )
    }, container);

    return () => ctx.revert();

  }, [])

  return (
    <div>RevealImage</div>
  )
}

export default RevealImage