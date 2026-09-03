import React, { useState, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import BlogCard from '../../ui/BlogCard'
import { blogPosts } from '../../../data/blogPosts'
import Pagination from '../../ui/Pagination'

const POSTS_PER_PAGE = 6

const BlogGrid = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const gridRef = useRef(null)
  const isFirstRender = useRef(true) // evita animar en el montaje inicial (Reveal ya se encarga de esa entrada)

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)                 // número total de páginas (18/6 = 3)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE                           // indice de inicio de la página actual (1-1)*6 = 0
  const currentPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)   // posts de la página actual [0, 6)

  const smoothScrollTo = (targetY, duration = 800) => {                           // función de scroll suave
    const startY = window.pageYOffset
    const diff = targetY - startY
    if (Math.abs(diff) < 5) return

    let startTime = null

    // Función de easing cúbico suave (easeInOutCubic)
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = easeInOutCubic(progress)

      window.scrollTo(0, startY + diff * easeProgress)

      if (elapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    const section = document.getElementById('blog-grid-section')
    if (section) {
      // Offset de 100px para no quedar tapado por el header y dejar un margen agradable
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - 100
      smoothScrollTo(Math.max(0, targetPosition), 850)
    }
  }

  // Anima la entrada de las tarjetas cada vez que cambia la página
  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const cards = gridRef.current?.children
    if (!cards || cards.length === 0) return

    gsap.fromTo(
      cards,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: 'power2.out',
      }
    )
  }, [currentPage])

  return (
    <>
      <section id="blog-grid-section" className='py-20 lg:py-[100px]'>
        <div className='container-custom'>
          <div ref={gridRef} className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
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