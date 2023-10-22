import React from 'react';

interface ExhibitProps {
  title: string;
  children: React.ReactNode;
}

const Exhibit: React.FC<ExhibitProps> = ({ title, children }) => {
  return (
    <div className="exhibit">
      <p>{title}</p>
      <div className="exhibit-content">
        {children}
      </div>
    </div>
  );
}

export default Exhibit;