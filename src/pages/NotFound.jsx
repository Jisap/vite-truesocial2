import PageHeader from '../components/ui/PageHeader'
import ScrollingTicker from '../components/sections/shared/ScrollingTicker'
import AnimatedText from '../components/ui/AnimatedText'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'

const NotFound = () => {
  return (
    <>
      <PageHeader title="Page" accent="not found" current="page not found" />
      <ScrollingTicker />

      <section className='py-20 lg:py-[100px]'>
        <div className='container-custom flex flex-col items-center text-center'>
          <Reveal variant="zoom" className="mb-10 max-w-[420px]">
            <img
              src="/images/404-error-img.png"
              alt="404-error-img"
              className="w-full"
            />
          </Reveal>

          <AnimatedText
            as="h2"
            variant="chars"
            text="Oops"
            accent="Page not found"
            className='text-[32px] font-light text-primary lg:text-[38px]'
          />

          <Reveal delay={0.25}>
            <p>
              The page you are looking for does not exits
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <Button href="/">Back to home</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default NotFound