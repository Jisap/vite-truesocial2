

const Pagination = ({ current = 1, total = 3, onPageChange }) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= total && page !== current) { // si page es mayor o igual a 1 y menor o igual a total y diferente al current
      if (onPageChange) {                                 // si onPageChange existe
        onPageChange(page);                               // ejecuta la funcion onPageChange con el numero de pagina para situarse al principio de esa página
      }
    }
  };

  return (
    <>
      <nav className="mt-12 flex items-center justify-center gap-3" aria-label="Pagination">
        <button
          type="button"
          onClick={() => handlePageClick(current - 1)}
          disabled={current <= 1}
          aria-label="Previous page"
          className={`
            flex h-11 w-11 items-center justify-center rounded-full border border-divider text-primary transition-all duration-300
            ${current <= 1                                                  // si current es menor o igual a 1
              ? "cursor-not-allowed opacity-30"                             // no puede pasar a la pagina anterior porque ya esta en la primera
              : "hover:border-accent hover:text-accent cursor-pointer"  // si no, puede pasar a la pagina anterior
            }`
          }
        >
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>

        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => handlePageClick(page)}
            aria-current={page === current ? "page" : undefined}
            className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border text-sm font-bold transition-all duration-300
                ${page === current
                ? "border-accent bg-accent text-black scale-105 shadow-md shadow-accent/20"
                : "border-divider text-primary hover:border-accent hover:text-accent"
              } 
              `}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          onClick={() => handlePageClick(current + 1)}
          disabled={current >= total}
          aria-label="Next page"
          className={`
            flex h-11 w-11 items-center justify-center rounded-full border border-divider text-primary transition-all duration-300
            ${current >= total
              ? "cursor-not-allowed opacity-30"
              : "hover:border-accent hover:text-accent cursor-pointer"
            }`
          }
        >
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </nav>
    </>
  )
}

export default Pagination