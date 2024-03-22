import React from 'react'
import HeroMain from "./HeroMain";
import OurFeatures from "./OurFeatures";
import InsuranceCoverage from "./InsuranceCoverage";
import CardView from '../CardView';

function Home() {
  return (
    <>
    <HeroMain />
    <OurFeatures />
    <CardView />
    <InsuranceCoverage />
    </>
  )
}

export default Home