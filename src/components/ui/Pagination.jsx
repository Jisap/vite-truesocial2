

const Pagination = ({ current = 1, total = 3 }) => {

  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <>
      <nav className="mt-12 flex items-center justify-center gap-3" aria-label="Pagination">
        <a
          href="#"
          aria-label="Previous page"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-divider text-primary transition-colors
          duration-300 hover:border-accent hover:text-accent"
        >
          <i className="fa-solid fa-arrow-left-long"></i>
        </a>

        {pages.map((page) => (
          <a
            key={page}
            className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-bold transition-color duration-300
                ${page === current
                ? "border-accent bg-accent text-black"
                : "border-divider text-primary hover:border-accent"
              } 
              `}
          >
            {page}
          </a>
        ))}

        <a
          href="#"
          aria-label="Next page"
          className="flex h-11 w-11 items-center justify-center rounded-full border text-sm font-bold transition-colors duration-300
           hover:border-accent hover:text-accent"
        >
          <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </nav>
    </>
  )
}

export default Pagination