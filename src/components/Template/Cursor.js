import React, { useRef } from 'react';

const Cursor = () => {
  const dot = useRef(null);
  const dotOutline = useRef(null);

  return (
    <>
      <div className="cursor-dot-outline" ref={dotOutline} />
      <div className="cursor-dot" ref={dot} />
    </>
  );
};

export default Cursor;
