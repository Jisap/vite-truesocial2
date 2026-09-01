import SectionTitle from "../../ui/SectionTitle"


const OurFaqs = () => {
  return (
    <section className="py-20 lg:py-[100px]">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrown="faqs"
              title="Answers to your common"
              accent="question"
              description="Find clear and concise answers to the most frequently asked question abour our social media marketing services."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurFaqs