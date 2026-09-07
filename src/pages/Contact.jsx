
import PageHeader from '../components/ui/PageHeader'
import ScrollingTicker from '../components/sections/shared/ScrollingTicker'
import ContactInfo from '../components/sections/contact/ContactInfo'
import SectionTitle from '../components/ui/SectionTitle'

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact"
        accent="us"
        current="contact us"
      />

      <ScrollingTicker />
      <ContactInfo />

      <div className='py-20 lg:py-[100px]'>
        <div className='container-custom'>
          <div className='mb-12 grid gap-6 border-b border-primary/20 lg:grid-cols-12'>
            <SectionTitle
              eyebrown="Contact us"
              title="Get in"
              accent="touch whith us"
              className='mb-0 lg:col-span-5'
            />

            <p className='mb-0 lg:col-span-5'>
              Connect with our team for tailored social media marketing solutions that elevate your brand, engage your
              audience, and drive result.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact