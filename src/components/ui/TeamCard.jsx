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

        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-primary capitalize">
              <Link
                to={`/team/${member.slug}`}
                className="transition-colors duration-300 hover:text-accent"
              >
                {member.name}
              </Link>
            </h3>

            <p className="mb-0 text-sm">
              {member.role}
            </p>
          </div>

          <ul className="flex gap-2">
            {teamSocialLinks.map((s) => (
              <li
                key={s.icon}
                aria-label={s.icon}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-divider text-sm text-primary transition-all
                duration-300 hover:-translate-y-0.5 hover:rotate-6 hover:border-accent hover:text-accent hover:shadw-[0_0_14px_-2px_rgba(191.247.71,0.6)]"
              >
                <i className={s.icon}></i>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </>
  )
}

export default TeamCard