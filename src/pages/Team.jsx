import React from 'react'
import PageHeader from '../components/sections/PageHeader'
import TeamGrid from '../components/sections/team/TeamGrid'


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