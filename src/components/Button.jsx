/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import propTypes from 'prop-types';

function Button(props) {
  const { children, startIcon, title } = props;

  return (
    <button
      type="button"
      className="flex items-center justify-center p-2 text-xl text-slate-800 hover:text-blue-400"
      title={title}
      // style={{ border: '1px solid #ddd' }}
    >
      {startIcon}
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  props: propTypes.object,
}.isRequired;
