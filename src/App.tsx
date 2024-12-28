import './App.css'
import {Button, Section, LandingImage} from '../packages/react/src'

function App() {
  return (
   <div>
    <Section type='dark'>
      <LandingImage></LandingImage>
    </Section>
    <Section type='light'>
      <LandingImage></LandingImage>
    </Section>
    <Section type='dark'>
      <LandingImage></LandingImage>
    </Section>
    <Section type='dark'>
      <LandingImage></LandingImage>
    </Section>
    <Section type='light'>
      <LandingImage></LandingImage>
    </Section>
    <Section type='dark'>
      <LandingImage></LandingImage>
    </Section>
    <Section type='grey'>
      <LandingImage></LandingImage>
    </Section>
    <Section type='dark'>
      <LandingImage></LandingImage>
    </Section>
   </div>
  )
}

export default App
