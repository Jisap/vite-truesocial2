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

        <Reveal
          delay={0.4}
          className="rounded-[20px] border-l-4 border-accent bg-secondary/40 p-8"
        >
          <p className="mb-0 text-lg font-medium text-primary italic">
            &ldquo;{blogDetailBody.quote}&rdquo;
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="mb-0">
            {blogDetailBody.afterQuote}
          </p>
        </Reveal>

        <AnimatedText
          as="h2"
          variant="chars"
          text={blogDetailBody.heading.text}
          accent={blogDetailBody.heading.accent}
          className="text-[32px] font-light text-primary lg:text-[38px]"
        />

        <Reveal delay={0.6}>
          <p className="mb-0">
            {blogDetailBody.afterHeading}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {blogDetailBody.list.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <i className="fa-solid fa-circle-check mt-1 text-accent"></i>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mb-0">
            {blogDetailBody.closing}
          </p>
        </Reveal>
      </div>
    </>
  )
}

export default BlogSingleContent