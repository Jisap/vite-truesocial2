import React from 'react'

const FloatingIcon = ({ src }) => {
  return (
    <figure className='group glow-accent relative flex h-[82px] w-[82px] items-center justify-center rounded-full bg-accent 
    shadow-[0_10px_25px_-8px_rgba(191,247,71,0.5)] transition-all duration-400 hover:scale-110 hover:bg-primary'
    >
      <img
        src={src}
        alt=""
        className='relative z-10 max-w-[41px] transition-transform duration-400 group-hover:rotate-12'
      />
    </figure>
  )
}

export default FloatingIcon