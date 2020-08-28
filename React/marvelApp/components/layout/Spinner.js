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
        top: '30%',
        left: '45%',
        width: '200px',
        margin: 'auto',
        display: 'block',
      }}
    />
  </Fragment>
);

export default Spinner;
