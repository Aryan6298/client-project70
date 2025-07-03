import React from 'react';
import Lottie from 'lottie-react';
import reloadAnimation from '../assets/Animation - 1751473455879.json';

const Loading = ({ style = { width: 64, height: 64 }, loop = true }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
    <Lottie animationData={reloadAnimation} loop={loop} />
  </div>
);

export default Loading; 