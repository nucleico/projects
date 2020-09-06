import React, { Fragment } from 'react';
import spinner from '../../img/spinner4.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner} 
      border="0"
      alt="Loading..."
      style={{       
        position: 'fixed',
        left: "40%",
        top: "15%"
      }}
    />
  </Fragment>
);

export default Spinner;
