import ScrollingTicker from "../components/sections/shared/ScrollingTicker"
import PageHeader from "../components/ui/PageHeader"




const Blog = () => {
  return (
    <>
      <PageHeader
        title="our"
        accent="blog"
        current="blog"
      />

      <ScrollingTicker />
    </>
  )
}

export default Blog