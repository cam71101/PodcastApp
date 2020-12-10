import React from 'react';
import useHttp from './http';

const Http = ({ children, ...rest }) => {
  return children;
};

const Old = (props) => {
  let returnVal;

  render(<Http>{(val = 'tits')}</Http>);
  return returnVal;
};
