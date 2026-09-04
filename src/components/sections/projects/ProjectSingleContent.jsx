import AnimatedText from "../../ui/AnimatedText"
import Reveal from "../../ui/Reveal"
import RevealImage from "../../ui/RevealImage"
import AccordionItem from "../../ui/AccordionItem"
import Counter from "../../ui/Counter"
import { projectDetailBody } from "@/data/projectDetail"
import { faqs } from "@/data/faqs"




const ProjectSingleContent = ({ project }) => {

  const {
    overview,
    challengesIntro,
    challengesList,
    solutionIntro,
    solutionParagraphs,
    rating
  } = projectDetailBody; // Fake data

  return (
    <>
      <div className="flex flex-col gap-8">
        <RevealImage
          src={project.image}
          alt={project.title}
          className="img-shine aspect-[16/9] w-full rounded-[20px]"
        />

        <AnimatedText
          as="h2"
          variant="chars"
          text="Project"
          accent="overview"
          className="text-[32px] font-light text-primary lg:text-[38px]"
        />

        {overview.map((p, i) => (
          <Reveal
            key={i}
            delay={i * 0.2}
          >
            <p className="mb-0">{p}</p>
          </Reveal>
        ))}

        <AnimatedText
          as="h2"
          variant="chars"
          text="Challenges &"
          accent="constraints"
          className="text-[32px] font-light text-primary lg:text-[38px]"
        />

        <Reveal>
          <p className="mb-0">
            {challengesIntro}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {challengesList.map((item, i) => (
              <li key={item} className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <AnimatedText
          as="h2"
          variant="chars"
          text="Projects"
          accent="solution"
          className="text-[32px] font-light text-primary lg:text-[38px]"
        />

        <Reveal>
          <p className="mb-0">
            {solutionIntro}
          </p>
        </Reveal>

        {/* Tarjeta con paragraphs y contador + rating */}
        <Reveal
          delay={0.2}
          className="grid items-center gap-8 rounded-[20px] border border-divider p-8 sm:grid-cols-[1fr_auto]"
        >
          <div className="flex flex-col gap-4">
            {solutionParagraphs.map((p, i) => (
              <p key={i} className="mb-0 text-sm">
                {p}
              </p>
            ))}
          </div>

          <div className="flex items-center gap-4 sm:flex-col sm:text-center">
            <i className="fa-solid fa-star text-2xl text-accent"></i>
            <div>
              <h3 className="text-3xl font-bold text-primary">
                <Counter
                  end={rating.end}
                  suffix={rating.suffix}
                />
              </h3>

              <p className="mb-0 text-sm">
                {rating.label}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-6">
          <AnimatedText
            as="h2"
            variant="chars"
            text="Lets address your"
            accent="question today !"
            className="text-[32px] font-light text-primary lg:text-[38px]"
          />
        </div>
      </div>
    </>
  )
}

export default ProjectSingleContent