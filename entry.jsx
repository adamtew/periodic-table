import React, { Component, PropTypes } from 'react';
const { render } = require('react-dom');
import App from './smart-components/App'; 

//------------------------------------------------------------------------------
// 
//------------------------------------------------------------------------------

render(
  <App />,
  document.getElementById('root')
)