import ServicesGrid from '../components/sections/services/ServicesGrid'
import ScrollingTicker from '../components/sections/shared/ScrollingTicker'
import PageHeader from '../components/ui/PageHeader'

const Services = () => {
  return (
    <>
      <PageHeader
        title="our"
        accent="services"
        current="our services"
      />

      <ScrollingTicker />

      <ServicesGrid />
    </>
  )
}

export default Services