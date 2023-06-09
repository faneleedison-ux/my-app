import React from 'react';
import styled from 'styled-components';



const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const About = () => (
  <GridWrapper>

   <p>Our website is committed to raise awareness about gender-based violence (GBV) in South Africa and providing survivors a voice.</p>
    <br/>

    <p>We want to educate and enlighten the public on the prevalence and effect of GBV, as well as give resources and help to individuals who have been touched by it.</p>
    <br/>
    
    <p>Our platform includes survivor tales, instructional information, interactive media, and other resources aimed at fostering a culture of respect, dignity, and equality for everyone. </p>
    <br/>
    
    <p>Join us in the battle against GBV and contribute to making the world a safer, more just place for everyone.</p>
    
    <br/>
   
  </GridWrapper>
)