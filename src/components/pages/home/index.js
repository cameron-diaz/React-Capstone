import React from 'react';
import { NbosHighcharts } from '../../molecules/NbosHighcharts';
import './style.css';
import { Link } from 'react-router-dom';
// import NbosSummaryDashBoardTemp from '../../templates/NbosSummaryDashBoardTemp';
import NbosMetricToggle from '../../atoms/NbosMetricToggle';

export function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NbosSummaryDashBoardTemp /> */}
        <NbosMetricToggle />
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
