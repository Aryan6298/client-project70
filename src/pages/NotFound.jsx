import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import './NotFound.css';

const NotFound = () => (
  <div className="notfound-container">
    <div className="notfound-animation">
      <Loading style={{ width: 180, height: 180 }} />
    </div>
    <h1 className="notfound-title">404</h1>
    <p className="notfound-message">The page you're looking for was not found.</p>
    <Link to="/" className="notfound-home-btn">← Back to Home</Link>
  </div>
);

export default NotFound;
