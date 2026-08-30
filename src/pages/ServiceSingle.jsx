import { useParams } from "react-router-dom"
import { services } from "../data/services"
import ScrollingTicker from "../components/sections/shared/ScrollingTicker"
import PageHeader from "../components/ui/PageHeader"




const ServiceSingle = () => {

  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug) ?? services[0];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <PageHeader
        title="Service"
        accent="details"
        current={service.title}
      />




    </>
  )
}

export default ServiceSingle