import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TeamCard from "../../ui/TeamCard"
import { team } from "@/data/team"

// Registramos el plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger)

const TeamGrid = () => {
  const gridRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card-item",
        {
          opacity: 0,
          y: 60,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: {
            each: 0.1, // 100ms entre tarjetas
            grid: "auto",
            from: "start",
          },
          // Solo se activa cuando el grid entra en pantalla al hacer scroll
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%", // Dispara cuando la parte superior del grid llega al 85% de la pantalla
            toggleActions: "play none none none",
            once: true, // Se reproduce una vez en el scroll
          },
          clearProps: "all",
        }
      )
    }, gridRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-20 lg:py-[100px]">
      <div className="container-custom">
        {/* Contenedor del Grid */}
        <div ref={gridRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.slug} className="team-card-item">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamGrid