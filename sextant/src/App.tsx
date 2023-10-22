import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <Banner title="Sextant Dashboard" />
      <Exhibit title="Featured Items">
        {/* Children components and content go here */}
      </Exhibit>
    </div>
  );
}

export default App;

