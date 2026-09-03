import React from 'react'
import BlogCard from '../../ui/BlogCard'
import { blogPosts } from '../../../data/blogPosts'
import Pagination from '../../ui/Pagination'

const BlogGrid = () => {
  return (
    <>
      <section className='py-20 lg:py-[100px]'>
        <div className='container-custom'>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {blogPosts.map((post, i) => (
              <BlogCard
                key={post.slug}
                post={post}
                delay={(i % 3) * 0.2}
              />
            ))}
          </div>

          <Pagination current={1} total={3} />
        </div>
      </section>
    </>
  )
}

export default BlogGrid