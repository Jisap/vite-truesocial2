import { Link } from "react-router-dom"
import AnimatedText from "./AnimatedText"



const PageHeader = ({ title, accent, current, bg = "/images/page-header-bg.jpg" }) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat pt-[160px] pb-[90px] lg:pt-[251px] lg:pb-[150px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-dark/60" />

      <div className="container-custom relative text-center">
        <AnimatedText
          as="h1"
          variant="chars"
          text={title}
          accent={accent}
          className="mb-5 inline-block text-[42px] leading-[1.1em] font-light text-primary sm:text-[60px] lg:text-[80px]"
        />

        <nav >
          <ol className="m-0 flex list-none items-center justify-center gap-3 p-0 text-lg font-semibold capitalize">
            <li>
              <Link
                to="/"
                className="text-primary transition-colors duration-300 hover:text-accent"
              >
                home
              </Link>
            </li>

            <li className="text-primary before:mr-3 before:content-['*']">
              {current}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default PageHeader