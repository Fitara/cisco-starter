import React from 'react';

interface ExhibitProps {
  title: string;
  children: React.ReactNode;
}

export default function Exhibit({ title, children }:ExhibitProps) {
  return (
    <div className="exhibit">
      <h2 className="exhibit-title">{title}</h2>
      <div className="exhibit-content">{children}</div>
    </div>
  );
}