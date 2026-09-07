import React from 'react'

const GoogleMap = () => {
  return (
    <>
      <section className='pb-20 lg:pb-[100px]'>
        <div className='container-custom'>
          <div className='overflow-hidden rounded-[20px]'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232559.02673210207!2d-3.844343464188269!3d40.438098610297125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e1!3m2!1ses!2ses!4v1788781341973!5m2!1ses!2ses"
              className="h-[450px] w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default GoogleMap