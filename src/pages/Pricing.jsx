
import PageHeader from '../components/ui/PageHeader'
import PricingGrid from '../components/sections/pricing/PricingGrid'
import ScrollingTicker from '../components/sections/shared/ScrollingTicker'


const Pricing = () => {
  return (
    <>
      <PageHeader title="Pricing" accent="Plan" current="Pricing Plan" />
      <ScrollingTicker />
      <PricingGrid />

    </>
  )
}

export default Pricing