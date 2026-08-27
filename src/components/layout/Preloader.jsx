import React, { useState, useEffect } from 'react'


/**
 * Componente de React que muestra una pantalla de carga (preloader) mientras la página termina de cargar, 
 * y luego desaparece con una animación suave.
 */

const Preloader = () => {

  const [visible, setVisible] = useState(true);               // Controla si el componente se renderiza o no (empieza en true)
  const [fading, setFading] = useState(false);                // Controla si está en proceso de desvanecerse (empieza en false).   

  useEffect(() => {
    const finish = () => {
      setFading(true);                                        // fadin=true pone opacity-0 iniciando la transición de opacidad
      setTimeout(() => setVisible(false), 600);               // después de 600ms, visible pasa a false y el componente deja de renderizarse
    }

    if (document.readyState === "complete") {                 // Si la página está completamente cargada, llama a finish()
      finish()
    } else {
      window.addEventListener("load", finish)                 // Si no, espera a que la página termine de cargar y llama a finish()
      return () => window.removeEventListener("load", finish) // Limpia el event listener
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`
      fixed inset-0 z-1000 flex items-center justify-center bg-dark transition-opacity duration-600 
      ${fading ? "opacity-0" : "opacity-100"}
    `}
    >
      <div className='relative h-[100px] w-[100px]'>
        <div className='h-full w-full animat-rotate-loading rounded-full border border-transparent border-t-accent'>
          <img
            src="/images/loader.svg"
            alt="Loading"
            className='absolute top-1/2 left-1/2 max-w-[66px] -translate-x-1/2 -translate-y-1/2'
          />
        </div>
      </div>
    </div>
  )
}

export default Preloader