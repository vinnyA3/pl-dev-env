import React from 'react';
// Components
import Content from '../common/content';
import BookContainer from './book-container';

const Hero = () => {
  return (
    <div className="hero">
      <Content componentName="hero"
      title="For all you bookworms"
      blurb="The saddest thing in left is wasted talent - Robert De Niro - A Bronx Tale(1993)"/>
      <BookContainer />
    </div>
  );
};

export default Hero;
