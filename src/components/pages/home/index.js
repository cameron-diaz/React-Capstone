import React from 'react';
import { NbosHighcharts } from '../../molecules/NbosHighcharts';
import './style.css';
import { Link } from 'react-router-dom';
import NbosSummaryDashBoardTemp from '../../templates/NbosSummaryDashBoardTemp';

// import NbosSummaryInfo1 from '../../molecules/NbosSummaryInfo1';
// import NbosSummaryInfo2 from '../../molecules/NbosSummaryInfo2';
// import NbosClientInfo from '../../molecules/NbosClientInfo.jsx';
// import NbosSurfaceCard from '../../atoms/NbosSurfaceCard';

export function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <NbosSummaryDashBoardTemp />
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
