// import React, { useState } from 'react';
import React from 'react';
import { Route } from 'react-router-dom';
import { NavBar } from '../nav-bar/nav-bar.component';
import { CONSTANTS } from '../../shared/constants';
import { LandingPage } from '../landing-page/landing-page.component';

export const AppContainer = (props: any) => {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  return (
    <div id='app-container' className="full--width full--height flex--column">
      <NavBar title={CONSTANTS.title}/>
      <div id='feature-container' className='full-width'>
        <Route path={'/'} component={LandingPage} exact={true}/>
        {/* <Route path={'/nav-bar'} component={NavBar} exact={true}/> */}
      </div>
    </div>
  );
}