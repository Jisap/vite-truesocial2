import PageHeader from '../components/ui/PageHeader'
import ScrollingTicker from '../components/sections/shared/ScrollingTicker'
import { useParams } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import RevealImage from '../components/ui/RevealImage'
import MemberContactForm from '../components/sections/team/MemberContactForm'
import { team, teamSocialLinks } from '@/data/team'
import { teamContactDefaults, teamCareerList, getTeamBio, getCareerIntro } from '@/data/teamDetail'

const contactBoxes = [
  { icon: "/images/icon-phone-accent.svg", label: "call", value: `Mobile: ${teamContactDefaults.phone}` },
  { icon: "/images/icon-mail-accent.svg", label: "email address", value: `${teamContactDefaults.email}` },
  { icon: "/images/icon-location-accent.svg", label: "address", value: `${teamContactDefaults.address}` },
]


const TeamSingle = () => {

  const { slug } = useParams();
  const member = team.find((m) => m.slug === slug) ?? team[0];
  const bio = getTeamBio(member.role);


  return (
    <>
      <PageHeader title="our" accent="Team" current="our team" />
      <ScrollingTicker />

      <section className='py-20 lg:py-[100px]'>
        <div className='container-custom grid gap-12 lg:grid-cols-12'>
          <div className='order-2 lg:order-1 lg:col-span-8'>
            {/* info header */}
            <Reveal className='mb-10 flex flex-wrap items-center justify-between gap-6 border-b border-divider pb-10'>
              <div>
                <p className='mb-2 text-sm focus-visible:tracking-wide text-accent uppercase'>
                  {member.role}
                </p>

                <h2 className='text-[38px] font-light text-primary'>
                  {member.name}
                </h2>
              </div>

              <ul className='flex gap-3'>
                {teamSocialLinks.filter((s) => s.icon !== "fa-brands fa-x-twitter").map((s) => (
                  <li key={s.icon}>
                    <a
                      href={s.href}
                      aria-label={s.icon}
                      className='flex h-10 w-10 items-center justify-center rounded-full border border-divider transition-colors
                      duration-300 hover:border-accent hover:text-accent'>
                      <i className={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Contact Boxes */}
            <div className='mb-14 grid gap-6 sm:grid-cols-3'>
              {contactBoxes.map((box, i) => (
                <Reveal
                  key={box.label}
                  delay={1 * 0.2}
                  className='rounded-[20px] border border-divider p-6'
                >
                  <img
                    src={box.icon}
                    alt={`${box.label} icon`}
                    className='mb-4 h-8 w-8'
                  />

                  <h3 className='mb-1 text-base font-bold text-primary capitalize'>{box.label}</h3>

                  <p className='mb-0 text-sm break-word'>{box.value}</p>
                </Reveal>
              ))}
            </div>

            {/* Personal Info */}
            <div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamSingle