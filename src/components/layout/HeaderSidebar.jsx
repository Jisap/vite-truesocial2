import { siteConfig, socialLinks } from "@/data/siteConfig"
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll"

const contactItems = [
  { icon: "/images/icon-phone-accent.svg", label: "Phone", value: siteConfig.phone },
  { icon: "/images/icon-mail-accent.svg", label: "Email", value: siteConfig.email },
  { icon: "/images/icon-location-accent.svg", label: "Address", value: siteConfig.address }
]

const HeaderSidebar = () => {

  useLockBodyScroll

  return (
    <>

    </>
  )
}

export default HeaderSidebar