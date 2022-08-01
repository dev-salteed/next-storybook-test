import React from 'react';
import PropTypes from 'prop-types';
//import './skbutton.css';
import Button from '@mui/material/Button';

/**
 * Primary UI component for user interaction
 */
export const SKButton = ({ ...props }) => {
  return (
    <Button className={['btn'].join(' ')} {...props}>
      {props.children}
      {/*<span className="text">{label}</span>*/}
    </Button> /* disabled : disabled={false}처리해도 될듯 */
  );
};

SKButton.propTypes = {};

SKButton.defaultProps = {};
