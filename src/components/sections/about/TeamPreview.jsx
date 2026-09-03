import Button from "../../ui/Button"
import Reveal from "../../ui/Reveal"
import SectionTitle from "../../ui/SectionTitle"
import TeamCard from "../../ui/TeamCard"
import { team } from "../../../data/team.js"



const TeamPreview = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
          <div className="mb-14 flex flex-row items-end justify-between gap-6 border-b border-primary/20 pb-10">
            <Reveal delay={0.2}>
              <Button delay={0.2} href="/team">
                all team members
              </Button>
            </Reveal>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 3).map((member, i) => (
              <TeamCard
                key={member.slug}
                member={member}
                delay={i * 0.2}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamPreview