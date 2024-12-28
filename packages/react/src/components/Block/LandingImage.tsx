import {Button} from "../Button";
import React from 'react';

/**
 * Home projects section.
 */
export  function LandingImage({links}) {
  return (
    <div className={'home-landing-background'}>
      <section className={`home-landing-image`}>
        <div className={`home-landing-container`}>
          <h1 className={`home-landing-heading`}>
            <span>We are</span> <br/>
            Open Sacramento
          </h1>
          <p className={`home-section-paragraph`}>
            Join us to address civic challenges and enhance public services for
            Sacramento residents through technology and open data. Volunteer now for a
            better future!
          </p>
          <div className={`home-buttons-group`}>
            
            <Button type="alt-light" href="/get-started">
            Get Started
            </Button>
            <Button type="gold" href="/projects">
            View Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}