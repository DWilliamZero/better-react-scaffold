import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div className='header'>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <h1>MY APP.COM - Header</h1>
      </Link>
    </div>
  );
}

export default Header;