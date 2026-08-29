import React from 'react'

const SatisfiedClientsBadge = ({ className = "" }) => {
  return (
    <div className={`
      glow-accent group flex items-center gap-4 rounded-[14px] border border-white/10 bg-secondary/60 p-5
      shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] backdrop-blur-[100px] transition-all duration-500 ease-out 
      hover:-translate-y-1 hover:border-accent/40
      ${className}
    `}
    >
      <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 transition-colors duration-500 group-hover:bg-accent/25'>
        <img
          src="/images/icon-satisficed-client.svg"
          alt=""
          className='h-6 w-6 brightness-0 invert transition-transform duration-500 group-hover:scale-110'
        />
      </span>

      <div className='text-left'>
        <h3 className='text-2xl font-bold text-primary'>

        </h3>
      </div>
    </div>
  )
}

export default SatisfiedClientsBadge