import React from 'react'
import { Link } from 'react-router-dom'

const FooterColumn = ({ title, links, className }) => {
  return (
    <div className={className}>
      <h3 className='mb-10 text-[22px] font-bold text-primary capitalize'>
        {title}
      </h3>

      <ul className='m-0 list-none p-0'>
        {links?.map((link) => (
          <li key={link.label} className='mb-4 last:mb-0'>
            <Link
              to={link.href}
              className='group relative inline-block text-base leading-[1.7em] text-body capitalize transition-colors duration-300 hover:text-accent'
            >
              {link.label}
              <span className='absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full' />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn