/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
const displayBtn = () => (
  <div>
    <label htmlFor="checkbox"> Check</label>
    <input id="checkbox" type="checkbox" />
  </div>
);

export default displayBtn;
