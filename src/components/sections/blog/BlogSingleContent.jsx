import AnimatedText from "../../ui/AnimatedText"
import Reveal from "../../ui/Reveal"
import RevealImage from "../../ui/RevealImage"
import { blogDetailBody, blogShareLinks } from "@/data/blogDetail"




const BlogSingleContent = ({ post }) => {
  return (
    <>
      <RevealImage
        src={post.image}
        alt={post.title}
        className="img-shine mb-10 aspect-[16/8] w-full rounded-[20px]"
      />

      <div className="flex flex-col gap-6">
        {blogDetailBody.intro.map((p, i) => (
          <Reveal key={i} delay={i * 0.2}>
            <p className="mb-0">
              {p}
            </p>
          </Reveal>
        ))}
      </div>
    </>
  )
}

export default BlogSingleContent