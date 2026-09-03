import { Link } from "react-router-dom"
import Reveal from "./Reveal"
import { teamSocialLinks } from "../../data/team"


const TeamCard = ({ member, delay = 0 }) => {
  return (
    <>
      <Reveal
        delay={delay}
        className="card-premium group rounded-[20px] p-3"
      >
        <div className="img-shine mb-6 aspect-4/5 overflow-hidden rounded-[16px]">
          <Link to={`/team/${member.slug}`}>
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </Link>
        </div>
      </Reveal>
    </>
  )
}

export default TeamCard