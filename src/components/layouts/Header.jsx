import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
//import './header.css';

export const Header = () => (
  <div className='className="ui-header"'>
    <header className="header">
      <div>
        <h1>Acme</h1>
      </div>
      <div>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
    </header>
  </div>
);
