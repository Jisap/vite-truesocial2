import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { navigation } from "@/data/navigation"
import { siteConfig, socialLinks } from "@/data/siteConfig"



const Header = () => {
  return (
    <header className='main-header absolute inset-x-0 top-0 z-100 border-b border-divider'>
      <div className={`z-100 transition-all duration-300 ease-in-out`}>
        header
      </div>
    </header>
  )
}

export default Header