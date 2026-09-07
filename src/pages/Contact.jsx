import React from 'react'
import PageHeader from '../components/ui/PageHeader'
import ScrollingTicker from '../components/sections/shared/ScrollingTicker'

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact"
        accent="us"
        current="contact us"
      />

      <ScrollingTicker />
    </>
  )
}

export default Contact