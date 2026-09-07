import AnimatedText from "../../../components/ui/AnimatedText"
import AccordionItem from "../../../components/ui/AccordionItem"
import { faqCategories } from "@/data/faqCategories"

const FaqCategories = () => {
  return (
    <>
      <div className="flex flex-col gap-16">
        {faqCategories.map((category) => (
          <div key={category.id} id={category.id} className="scroll-mt-32">
            <AnimatedText
              as="h2"
              variant="chars"
              text={category.title}
              accent={category.accent}
              className="mb-6 text-[32px] font-light text-primary lg:text-[38px]"
            />

            {category.items.map((item, i) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default FaqCategories