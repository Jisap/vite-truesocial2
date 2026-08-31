import React from 'react'
import SectionTitle from '../../ui/SectionTitle'
import { pricingPreview, pricingBodyList } from '../../../data/pricing.js'
import Reveal from '../../ui/Reveal'
import PricingCard from '../../ui/PricingCard.jsx'

const OurPricing = () => {
  return (
    <>
      <section className='py-20 lg:py-[100px]'>
        <div className='container-custom'>
          <div className='grid gap-12 lg:grid-cols-12'>
            <div className='lg:col-span-5'>
              <SectionTitle
                eyebrown='Pricing Plan'
                title='Affordable'
                accent='plans for every businnes'
              />

              <div className='flex flex-col gap-8'>
                {pricingBodyList.map((item, i) => (
                  <Reveal key={item.title}>
                    <h3 className='mb-2 text-lg font-bold text-primary capitalize'>
                      {item.title}
                    </h3>

                    <p className='mb-0 text-sm'>
                      {item.excerpt}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className='grid gap-8 sm:grid-cols-2 lg:col-span-7'>
              {pricingPreview.map((plan, i) => (
                <PricingCard key={plan.name} plan={plan} delay={i * 0.25} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurPricing