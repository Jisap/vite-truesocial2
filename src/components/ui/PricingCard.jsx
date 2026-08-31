import Button from "./Button"
import Reveal from "./Reveal"



const PricingCard = ({ plan, delay = 0 }) => {
  return (
    <>
      <Reveal
        delay={delay}
        className={`
          card-premium group flex h-full flex-col rounded-[24px] border p-8 text-center
          ${plan.highlighted
            ? "border-accent bg-accent/10 shadow-[0_20px_50px_-20px_rgba(191,247,71,0.35)]"
            : "border-divider"
          }  
        `}
      >
        <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 transition-transform duration-500 ease-out
         group-hover:-rotate-6 group-hover:scale-110"
        >
          <img
            src={plan.icon}
            alt=""
            className="h-7 w-7"
          />
        </span>

        <h3 className="mb-2 text-lg font-bold text-primary capitalize">
          {plan.name}
        </h3>

        <p className="mb-4 text-sm">
          {plan.tagline}
        </p>

        <h2 className="mb-6 flex items-start text-5xl font-bold mx-auto leading-none text-primary">
          <span className="mr-1 text-3xl leading-none">$</span>
          <span>{plan.price}</span>
          <span className="self-end text-lg font-normal text-body">
            /month
          </span>
        </h2>

        <Button
          href="/contact"
          variant="highlighted"
          className="mb-6"
        >
          Get Started
        </Button>

        <ul className="mt-auto flex flex-col gap-3 text-sm">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center justify-center gap-2">
              <i className="fa-solid fa-circle-check text-accent"></i>
              {f}
            </li>
          ))}
        </ul>
      </Reveal>
    </>
  )
}

export default PricingCard