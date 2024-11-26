import React from 'react';
import ideagpt from './assets/Ideagpt.png'

function Ideagpt() {
  return React.createElement(
    'div',
    { className: 'bg-light' },
    React.createElement('img', {
      src: ideagpt,
      alt: '',
      className: 'd-block w-100 h-100',
    })
  );
}

export default Ideagpt;
