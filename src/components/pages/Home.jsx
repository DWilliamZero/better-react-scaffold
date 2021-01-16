import React from 'react';
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div>
      <h1>This is HOME</h1>
      <Link to={'/sign-in'} style={{ textDecoration: 'none' }}>
        <h4>Login In</h4>
      </Link>
      <Link to={'/sign-up'} style={{ textDecoration: 'none' }}>
        <h4>Sign Up</h4>
      </Link>
    </div>
  );
}

export default Home;