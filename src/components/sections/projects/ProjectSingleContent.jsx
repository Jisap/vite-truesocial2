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
  } = projectDetailBody

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
      </div>
    </>
  )
}

export default ProjectSingleContent