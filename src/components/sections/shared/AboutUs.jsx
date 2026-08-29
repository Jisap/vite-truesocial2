import React from 'react'
import RevealImage from '../../ui/RevealImage'

const AboutUs = () => {
  return (
    <section className='py-20 lg:py-[100px]'>
      <div className='container-custom'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          {/* Images */}
          <div className='relative'>
            <RevealImage />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs