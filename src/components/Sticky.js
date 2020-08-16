import React from 'react';

export default function Sticky({ children }) {
  return (
    <div
      style={{ position: 'sticky', top: 0, zIndex: '2', background: 'inherit' }}
    >
      {children}
    </div>
  );
}
