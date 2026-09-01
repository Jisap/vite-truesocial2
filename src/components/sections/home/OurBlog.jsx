import Button from "../../ui/Button"
import Reveal from "../../ui/Reveal"
import SectionTitle from "../../ui/SectionTitle"
import BlogCard from "../../../components/ui/BlogCard"
import { blogPosts } from "../../../data/blogPosts.js"


const OurBlog = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6 border-b border-primary/20 pb-10">
            <SectionTitle
              eyebrown="Latest blog"
              title="Insights from our"
              accent="experts"
              className="mb-0 max-w-[605px]"
            />

            <Reveal delay={0.25}>
              <Button href="/blog">
                see all
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurBlog