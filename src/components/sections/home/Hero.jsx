import React from 'react'
import Reveal from '../../ui/Reveal'
import AnimatedText from '../../ui/AnimatedText'

const Hero = () => {
  return (
    <div className='hero relative flex min-h-screen items-center overflow-hidden pt-[140px] pb-[90px] lg:pt-[180px]'>
      {/* Background video, dimmed with a dark overlay */}
      <div className='absolute inset-0 h-full w-full'>
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
      <div
        aria-hidden="true"
        className='animate-pulse-glow pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] bg-accent/25 blur-[120px]'
      />
      <div
        aria-hidden="true"
        className='animate-pulse-glow pointer-events-none absolute top-1/3 -right-32 h-[380px] w-[380px] bg-accent/15 blur-[130px] [animation-delay:1.2s]'
      />

      <div className='container-custom relative z-10'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          {/* Hero content */}
          <div>
            <Reveal
              variant="up"
              className='mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 
              text-xs font-bold tracking-[0.08em] text-primary uppercase backdrop-blur-[20px]'
            >
              <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(191,247,71,0.8)]' />
              <span>Trusted social media growth partner</span>
            </Reveal>

            <AnimatedText
              as="h1"
              variant="chars"
              text="Grow Your Brand with Powerful"
              accent="Social Media Strategies"
              className="text-[38px] leading-[1.5em] font-light text-primary sm:text-[48px] lg:text-[68px]"
            />

            <Reveal
              as="p"
              delay={0.1}
              className='mt-5 max-w-[520px] text-lg'
            >
              Elevate your online presence, engage your audience, and meaningful results with tailored social media strategies.
            </Reveal>

            <Reveal
              delay={0.2}
              className='mt-8 flex flex-wrap items-center gap-6'
            >

            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero