import React from 'react';
// import { NbosHighcharts } from '../../molecules/NbosHighcharts';
import './style.css';
// import { Link } from 'react-router-dom';
import NbosSummaryDashBoardTemplate from '../../templates/NbosSummaryDashBoardTemplate';
// import { Switch } from 'antd';
import TopNavBar from '../../atoms/TopNavBar';
import SideNavBar from '../../atoms/SideNavBar';
// import NbosMetricToggle from '../../atoms/NbosMetricToggle';

export function HomePage() {
  return (
    <div className="App">
      <SideNavBar />
      <TopNavBar />
      {/* <header className="App-header"><NbosMetricToggle /></header> */}
      <section>
        <div className="tw-mt-16 tw-ml-3">
          <NbosSummaryDashBoardTemplate />
          {/* <Link to="/edit" className="App-link">
            Edit Page
          </Link> */}
        </div>
        {/* <NbosHighcharts /> */}
      </section>
    </div>
  );
}
