import React from 'react'
import RevealImage from '../../ui/RevealImage'
import Counter from '../../ui/Counter'

const AboutUs = () => {
  return (
    <section className='py-20 lg:py-[100px]'>
      <div className='container-custom'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          {/* Images - left side */}
          <div className='relative'>
            <RevealImage
              src="/images/about-us-image.jpg"
              alt="About us"
              className='img-shine aspect-4/5 w-full rounded-[20px]'
            />

            <div className='absolute -bottom-8 left-1/2 flex w-[calc(100%-40px)] -translate-x-1/2 items-center gap-5 rounded-[20px] bg-secondary p-6
            sm:left-8 sm:w-auto sm:translate-x-0'
            >
              <h2 className='text-4xl font-bold text-accent'>
                <Counter end={25} suffix="+" />
              </h2>

              <p className='mb-0 text-sm'>
                Years of experience <span className='block font-semibold text-primary'>Social media marketing</span>
              </p>
            </div>
          </div>

          {/* Conten - right side */}
          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs