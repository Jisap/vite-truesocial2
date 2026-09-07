
import PageHeader from '@/components/ui/PageHeader'
import ScrollingTicker from '@/components/sections/shared/ScrollingTicker'

import FaqSidebar from '@/components/sections/faqs/FaqSidebar'
import FaqCategories from '../components/sections/faqs/FaqCategories'

const Faqs = () => {
  return (
    <>
      <PageHeader title="Frequently asked" accent="us" current="faqs" />
      <ScrollingTicker />
      <div className='py-20 lg:py-[100px]'>
        <div className='container-custom grid gap-12 lg:grid-cols-12'>
          <div className='order-2 lg:order-1 lg:col-span-8'>
            <FaqSidebar />
          </div>

          <div className='order-1 lg:order-2 lg:col-span-4'>
            <FaqCategories />
          </div>
        </div>
      </div>
      <FaqSidebar />


    </>
  )
}

export default Faqs