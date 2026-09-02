import { Link } from "react-router-dom"
import Button from "../../ui/Button"
import Reveal from "../../ui/Reveal"
import RevealImage from "../../ui/RevealImage"
import SectionTitle from "../../ui/SectionTitle"

const reviewImages = [
  "/images/satisfy-client-img-1.jpg",
  "/images/satisfy-client-img-2.jpg",
  "/images/satisfy-client-img-3.jpg",
]

const WhatWeDo = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrown="what We do"
                title="Brands through strategic"
                accent="social media marketing"
              />

              <Reveal className="mt-8 mb-8 flex flex-wrap items-center gap-6">
                <div className="flex -space-x-3">
                  {reviewImages.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt="client"
                      className="h-12 w-12 rounded-full border-2 border-dark object-cover"
                    />
                  ))}
                </div>

                <p className="mb-0 max-w-[200px] text-sm">
                  Join Our 135k+ community of talent our social customer
                </p>

                <Button href="/contact">
                  Get Started
                </Button>
              </Reveal>

              <Reveal
                delay={0.2}
                className="flex items-center gap-6 rounded-[20px] border border-divider p-6"
              >
                <RevealImage
                  src="/images/what-we-social-image.jpg"
                  alt=""
                  className="img-shine h-20 w-20 shrink-0 rounded-[14px]"
                />

                <div>
                  <p className="mb-3 text-sm">
                    Empowering Businesses to Unmatched Growth Through Innovative Social Media Marketing Strategies
                  </p>

                  <div className="flex items-center gap-4 text-sm">
                    <a href="#" className="inline-flex items-center gap-2 hover:text-accent">
                      <i className="fa-brands fa-facebook-f" /> Facebook
                    </a>

                    <a href="#" className="inline-flex items-center gap-2 hover:text-accent">
                      <i className="fa-brands fa-twitter" /> Twitter
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <RevealImage
                src="/images/what-we-img.jpg"
                alt=""
                className="img-shine aspect-4/5 rounded-[20px] w-full"
              />

              <Link
                to="/contact"
                className="absolute -bottom-6 -left-6 flex h-[110px] w-[110px] items-center justify-center rounded-full bg-accent p-2 text-center text-xs
                font-bold text-dark capitalize"
              >
                <img
                  src="/images/our-agency-circle.png"
                  alt="circle"
                  className="absolute inset-0 h-full w-full animate-spin-slow"
                />

                <span>
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhatWeDo