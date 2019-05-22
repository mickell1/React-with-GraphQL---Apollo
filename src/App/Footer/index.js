import React from 'react';
import Link from '../../Link';
import './Footer.css';

const Footer = () => (
  <div className="Footer">
    <div>
      <small>
        <span className="Footer-text">Built by</span>{' '}
        <Link
          className="Footer-link"
          href="https://github.com/mickell1/React-with-GraphQL-Apollo"
        >
          Mickell Crawford
        </Link>{' '}
      </small>
    </div>
    <div>
      <small>
        <span className="Footer-text">
          Github: 
        </span>{' '}
        <Link
          className="Footer-link"
          href="https://github.com/mickell1"
        >
          mickell1
        </Link>{' '}
      </small>
    </div>
  </div>
);

export default Footer;