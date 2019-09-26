import React from 'react';
import { Link } from 'react-router-dom';

export const Unauthorized = () => (
  <div>
    <h2>
      unauthorized, please <Link to="/auth/signin">sign in</Link>.
    </h2>
  </div>
);
