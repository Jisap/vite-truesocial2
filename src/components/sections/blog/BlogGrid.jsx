import React, { useState } from 'react'
import BlogCard from '../../ui/BlogCard'
import { blogPosts } from '../../../data/blogPosts'
import Pagination from '../../ui/Pagination'

const POSTS_PER_PAGE = 6

const BlogGrid = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const currentPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Scroll suave hacia el inicio de la sección de posts al cambiar de página
    const section = document.getElementById('blog-grid-section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <section id="blog-grid-section" className='py-20 lg:py-[100px]'>
        <div className='container-custom'>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {currentPosts.map((post, i) => (
              <BlogCard
                key={`${post.slug}-${currentPage}`}
                post={post}
                delay={(i % 3) * 0.15}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              current={currentPage}
              total={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default BlogGrid