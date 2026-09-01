import { Link } from "react-router-dom"
import { footerLinks, footerSocialLinks } from "@/data/footer"
import { siteConfig } from "../../data/siteConfig"
import SectionTitle from "../ui/SectionTitle"
import FooterColumn from "../ui/FooterColumn"

const Footer = () => {
  return (
    <>
      <footer className="main-footer relative overflow-hidden">
        {/* Lets Work Together band */}
        <div className="relative py-20">
          <div className="container-custom">
            <div className="relative bg-[url('/images/work-together-bg.png')] bg-center bg-no-repeat py-24 text-center">
              <h3 className="mb-5 text-[22px] font-bold tracking-wide text-primary uppercase">
                Let's Collaborate
              </h3>

              <h2 className="text-[42px] leading-none font-extrabold text-primary uppercase sm:text-[80px] lg:text-[130px] xl:text-[180px]">
                Let's Work Together
              </h2>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link
                  to="/"
                  className="group glow-accent flex h-[110px] w-[110px] flex-col items-center justify-center rounded-full bg-accent text-accent
                  shadow-[0_15px_40px_-12px_rgba(191,247,71,0.5)] transition-all duration-400 ease-out hover:scale-110 hover:bg-secondary sm:h-[150px] sm:w-[150px]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mb-2 h-6 w-6 text-dark transition-transform duration-400 group-hover:rotate-45 group-hover:text-primary"
                  >
                    <path
                      d="M7 17 17 7M9 7h8v8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-sm font-bold text-dark capitalize transition-color duration-300 group-hover:text-primary">
                    Get in Touch
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="border-t border-divider pt-[60px] pb-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
              <div className="md:col-span-12 lg:col-span-5">
                <SectionTitle
                  title="Let's achieve social media"
                  accent="excellence"
                  titleTag="h2"
                  className="mb-8 [&_h2]:text-[32px] lg:[&_h2]:text-[38px]"
                />

                <form
                  onSubmit={(e) => e.preventDefault()}
                  // gap-0 en el formulario - Elimina cualquier espacio entre los elementos
                  className="flex items-center gap-0"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter Your Email"
                    // w-[calc(100%-60px)] - Hace que el input ocupe el 100% del ancho menos los 60px del botón
                    className="w-[calc(100%-60px)] rounded-full border border-divider bg-transparent 
                    px-4 py-[15px] text-base font-medium text-primary placeholder:text-primary focus:outline-none"
                  />

                  <button
                    type="submit"
                    aria-label="Subscribe"
                    // ml-[-50px] - Este margen negativo mueve el botón 50px hacia la izquierda, superponiéndolo sobre el lado derecho del input
                    className="ml-[-50px] flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-accent transition-all
                    duration-300 hover:scale-110 hover:bg-primary hover:shadow-[0_0_20px_-2px_rgba(191,247,71,0.7)]"
                  >
                    <i className="fa-regular fa-paper-plane text-lg text-dark"></i>
                  </button>
                </form>
              </div>

              <FooterColumn
                title="Quick Links"
                links={footerLinks.quickLinks}
                className="md:col-span-4 lg:col-span-2"
              />
              <FooterColumn
                title="Services"
                links={footerLinks.services}
                className="md:col-span-4 lg:col-span-2"
              />
              <FooterColumn
                title="Support"
                links={footerLinks.support}
                className="md:col-span-4 lg:col-span-2"
              />

              <div className="md:col-span-12">
                <div className="relative flex flex-wrap items-center gap-8 overflow-hidden rounded-[30px] border border-divider bg-secondary/40
                p-8 backdrop-blur-[100px] transition-colors duration-500 hover:border-accent/40 sm:p-[50px_60px]"
                >
                  <img
                    src={siteConfig.logo}
                    alt="logo"
                    className="max-w-[180px]"
                  />

                  <div className="ml-auto flex flex-wrap items-center justify-end gap-y-5">
                    <div className="flex items-center gap-4 border-r border-divider pr-10">
                      <i className="fa-solid fa-phone-volume text-2xl text-accent"></i>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-lg font-bold text-primary transition-colors duration-300 hover:text-accent"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-4 pl-2">
                      <i className="fa-solid fa-envelope text-2xl text-accent"></i>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-lg font-bold text-primary transition-colors duration-300 hover:text-accent"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer