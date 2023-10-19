import React, { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const divStyle = {
    position: 'fixed',
    top: `${position.y - 40}px`,
    left: `${position.x -40}px`,
    width: '80px',
    height: '80px',
    backgroundColor: 'lightgray',
    borderRadius: '50%',
  };

  const hideOnMobile = '@media (min-width: 768px) { display: none; }';

  return <div className='hidden md:block' style={{ ...divStyle, ...{ hideOnMobile } }}></div>;
};

export default MouseFollower;
