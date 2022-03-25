import React from 'react'
import { Hero } from './Hero'
import { Support } from './Support'
import { Testimonials } from './Testimonials'
import { Features } from './Features'
import { type CodeSnippets, HowItWorks } from './HowItWorks'
import { FAQ } from './FAQ'
import { Tweets } from './Tweets'
import { Playground } from './Playground'
import { MainContainer } from '../MainContainer'

export const LandingPage: React.FC<{ codeSnippets: CodeSnippets; usedByCount: number }> = ({
  codeSnippets,
  usedByCount,
}) => {
  return (
    <MainContainer>
      <Hero />
      <Support />
      <Testimonials usedByCount={usedByCount} />
      <Features />
      <HowItWorks codeSnippets={codeSnippets} />
      <Playground />
      <FAQ />
      <Tweets />
    </MainContainer>
  )
}
