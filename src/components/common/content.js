import React from 'react';

const Content = (props) => {
  return (
    <div className={props.componentName + '__content'}>
      <h1 className={props.componentName + '__title'}>{props.title}</h1>
      <p className={props.componentName + '__blurb'}>{props.blurb}</p>
    </div>
  );
};

export default Content;
