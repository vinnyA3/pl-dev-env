import React from 'react';
// Components
import MainNavigation from './common/main-navigation';

const App = (props) => {
  return (
    <div>
      <MainNavigation />
      {props.children}
    </div>
  );
};

export default App;
