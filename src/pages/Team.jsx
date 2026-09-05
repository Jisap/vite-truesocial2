import React from 'react'
import PageHeader from '../components/ui/PageHeader'
import TeamGrid from '../components/sections/team/TeamGrid'
import ScrollingTicker from '../components/sections/shared/ScrollingTicker'


const Team = () => {
  return (
    <>
      <PageHeader title="our" accent="Team" current="our team" />
      <ScrollingTicker />
      <TeamGrid />
    </>
  )
}

export default Team