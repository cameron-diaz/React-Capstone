import React from 'react';
import { NbosHighcharts } from '../../molecules/NbosHighcharts';
import './style.css';
import { Link } from 'react-router-dom';
import NbosClientInfo from '../../molecules/NbosClientInfo.jsx';
import NbosSurfaceCard from '../../atoms/NbosSurfaceCard';

export function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <NbosSurfaceCard>
          <NbosClientInfo />
        </NbosSurfaceCard>
      </header>
      <section>
        <div>
          <Link to="/edit" className="App-link">
            Edit Page
          </Link>
        </div>
        <NbosHighcharts />
      </section>
    </div>
  );
}
