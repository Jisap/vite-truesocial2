import TeamCard from "../../ui/TeamCard"
import { team } from "@/data/team"




const TeamGrid = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="containe-custom grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <TeamCard
              key={member.slug}
              member={member}
              delay={(i % 3) * 0.2}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default TeamGrid