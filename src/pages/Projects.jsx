import ProjectFilterGrid from "../components/sections/projects/ProjectFilterGrid"
import ScrollingTicker from "../components/sections/shared/ScrollingTicker"
import PageHeader from "../components/ui/PageHeader"



const Projects = () => {
  return (
    <>
      <PageHeader
        title="our"
        accent="Project"
        current="our project"
      />
      <ScrollingTicker />
      <ProjectFilterGrid />
    </>
  )
}

export default Projects