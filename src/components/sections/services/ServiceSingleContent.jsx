import AnimatedText from "../../ui/AnimatedText"
import Reveal from "../../ui/Reveal"
import RevealImage from "../../ui/RevealImage"
import { serviceEntryList, serviceProcessSteps } from "../../../data/serviceDetail"
import { faqs } from "../../../data/faqs"
import AccordionItem from "../../../components/ui/AccordionItem"


const ServiceSingleContent = () => {
  return (
    <div className="flex flex-col gap-8">
      <RevealImage
        src="/images/service-single-img.jpg"
        alt="Service Single Image"
        className="img-shine aspect-[16/9] w-full rounded-[20px]"
      />

      <Reveal>
        <p>
          Our digital marketing services are designed to elevate your brand and reach your target audience
          effectively. We develop customized strategies that include SEO, PPC advertising, social media marketing,
          content marketing, and email campaigns. By leveraging data-driven insights and the latest trends, we
          maximize engagement, drive traffic, and boost conversions, ensuring a measurable return on your
          investment. Let us help you grow your digital presence and achieve your business goals.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <p>
          With a focus on data-driven insights, we build customized strategies that drive traffic, boost
          engagement, and maximize ROI. Let us help you reach your business goals with impactful digital marketing.
        </p>
      </Reveal>

      <AnimatedText
        as="h2"
        variant="chars"
        text="Key"
        accent="feature of social marketing"
        className="text-[32px] font-light text-primary lg:text-[38px]"
      />

      <Reveal>
        <p>
          Our digital marketing approach is a data-driven strategy that combines targeted outreach with creative
          content. We focus on reaching the right audience through precision techniques like SEO, PPC, and social
          media advertising, supported by engaging content marketing and email campaigns.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <p>
          We utilize audience segmentation to divide your customer base into distinct groups based on demographics,
          interests, and behaviors. This allows us to deliver personalized content and messaging, ensuring
          relevance and higher engagement rates.
        </p>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2">
        <Reveal delay={0.2}>
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {serviceEntryList.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm capitalize"
              >
                <i className="fa-solid fa-circle-check mt-1 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <RevealImage
          src="/images/service-entry-img.jpg"
          alt=""
          className="img-shine aspect-square w-full rounded-[20px]"
        />
      </div>

      <AnimatedText
        as="h2"
        variant="chars"
        text="Our"
        accent="process of social marketing"
        className="text-[32px] font-light text-primary lg:text-[38px]"
      />

      <Reveal>
        <p>
          Our social marketing process begins with discovery and research to understand your goals. We then
          develop a tailored strategy and implement campaigns across various channels. Continuous monitoring and
          optimization ensure effectiveness, followed by regular reporting to track performance. Finally, we refine
          and scale efforts for sustained growth and success.
        </p>
      </Reveal>

      <div className="flex flex-col gap-6">
        {serviceProcessSteps.map((step, i) => (
          <Reveal
            key={step.no}
            delay={0.2 + i * 0.2}
            className="grid items-center gap-6 rounded-[20px] border border-divider p-6 sm:grid-cols-[auto_1fr_auto]"
          >
            <img
              src={step.image}
              alt="Process step image"
              className="w-24 h-24 rounded-[14px] object-cover"
            />

            <div>
              <div className="mb-2 flex items-center gap-3">
                <img
                  src={step.icon}
                  alt="step icon"
                  className="h-8 w-8"
                />

                <h3 className="text-sm font-bold tracking-wide text-accent uppercase">
                  step <span>{step.no}</span>
                </h3>
              </div>

              <h3 className="mb-2 text-l font-bold text-primary capitalize">
                {step.title}
              </h3>

              <p className="mb-0 text-sm">
                {step.excerpt}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6">
        <AnimatedText
          as="h2"
          variant="chars"
          text="Lets address your"
          accent="questions today!"
          className="mb-6 text-[32px font-light text-primary lg:text-[38px]"
        />

        {faqs.map((faq, i) => (
          <AccordionItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            defaultOpen={i === 1}
          />
        ))}
      </div>
    </div>
  )
}

export default ServiceSingleContent