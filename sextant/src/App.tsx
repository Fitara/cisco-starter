import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import Exhibit from './components/Exhibit';
import IpAddress from './components/IpAddress';
import './App.css'

const versions = ['v4', 'v6'];

export default function App() {
  return (
    <div className="app">
      <Banner />
      <div className="app-content">
        <Sidebar />
        <Exhibit title="IP Addresses">
          {versions.map((version) => (
            <IpAddress key={version} version={version} />
          ))}
        </Exhibit>
      </div>
    </div>
  );
}

