import React from 'react'

const Hero = () => {
  return (
    <div className='hero relative flex min-h-screen items-center overflow-hidden pt-[140px] pb-[90px] lg:pt-[180px]'>
      {/* Background video, dimmed with a dark overlay */}
      <div className='absolute inset-0 h-ful w-full'>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-bg.jpg"
          className='h-full w-full object-cover'
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/80'></div>
      </div>

      {/* Floating glow orbs - pure decoration */}
    </div>
  )
}

export default Hero