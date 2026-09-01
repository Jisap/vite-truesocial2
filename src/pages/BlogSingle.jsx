import { useParams } from "react-router-dom"
import PageHeader from "../components/ui/PageHeader"
import ScrollingTicker from "../components/sections/shared/ScrollingTicker"
import BlogSingleContent from "../components/sections/blog/BlogSingleContent"
import { blogPosts } from "../data/blogPosts.js"



const BlogSingle = () => {

  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);
  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <>
      <PageHeader
        title="Blog"
        accent="details"
        current={post.title}
      />

      <ScrollingTicker />

      <section className="py-20 lg:py-[100px]">
        <div className="container-custom mx-auto max-w-[860px]">
          <BlogSingleContent post={post} />
        </div>
      </section>
    </>
  )
}

export default BlogSingle