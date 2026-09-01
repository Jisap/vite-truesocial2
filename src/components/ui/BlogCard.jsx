import { Link } from "react-router-dom"
import Reveal from "./Reveal"
import Button from "./Button"



const BlogCard = ({ post, delay = 0 }) => {
  return (
    <>
      <Reveal
        delay={delay}
        className="card-premium group rounded-[20px] border border-divider p-6"
      >
        <div className="img-shine mb-6 aspect-[4/3] overflow-hidden rounded-[16px]">
          <Link to={`/blog/${post.slug}`}>
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </Link>
        </div>

        <h3 className="mb-4 text-lg font-bold text-primary">
          <Link
            to={`/blog/${post.slug}`}
            className="transition-colors duration-300 hover:text-accent"
          >
            {post.title}
          </Link>
        </h3>

        <Button
          href={`/blog/${post.slug}`}
          variant="readmore"
        >
          Read more
        </Button>
      </Reveal>
    </>
  )
}

export default BlogCard