import React from 'react'

const Marquee = ({ items, renderItem, className = " " }) => {

  const doubled = [...items, ...items]

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div className='marquee-track flex w-max shrink-0 items-center'>
        {doubled.map((item, i) => (
          <div key={i} className='mx-8 flex shrink-0 items-center'>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee