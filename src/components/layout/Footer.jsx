import { Link } from "react-router-dom"
import { footerLinks, footerSocialLinks } from "@/data/footer";
import { siteConfig } from "../../data/siteConfig";
import SectionTitle from "../ui/SectionTitle";



const Footer = () => {
  return (
    <>
      <footer className="main-footer relative overflow-hidden">
        {/* Lets Work Together band */}
        <div className="relative py-20">
          <div className="container-custom">
            <div className="relative bg-[url('/images/work-together-bg.png)] bg-center bg-no-repeat py-24 text-center">
              <h3 className="mb-5 text-[22px] font-bold tracking-wide text-primary uppercase">
                Let's Collaborate
              </h3>

              <h2 className="text-[42px] leading-none font-extrabold text-primary uppercase sm:text-[8px] lg:text-[130px] xl:text-[180px]">
                Let's Work Together
              </h2>

              <div className="absolute top-1/2 lef-1/2 -translate-x-1/2 -translate-y-1/2">
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
                      strokeLineCap="round"
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
      </footer>
    </>
  )
}

export default Footer