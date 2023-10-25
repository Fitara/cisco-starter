import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import Exhibit from './components/Exhibit';
import IpAddress from './components/IpAddress';
import Latency from './components/Latency';
import './App.css'

const versions = ['v4', 'v6'];

export default function App() {
  return (
    <div className="app">
      <Banner title="Sextant Dashboard"/>
      <div className="app-content">
        <Sidebar />
        <Exhibit title="IP Addresses">
          <div className="ip-wrapper">
            {versions.map((version) => (
              <IpAddress key={version} version={version} />
            ))}
          </div>
          <Latency />
        </Exhibit>
      </div>
    </div>
  );
}

