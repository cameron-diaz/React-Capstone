import React from 'react';
// import { NbosHighcharts } from '../../molecules/NbosHighcharts';
import './style.css';
// import { Link } from 'react-router-dom';
// import NbosSummaryDashBoardTemplate from '../../templates/NbosSummaryDashBoardTemplate';
// import { Switch } from 'antd';
import TopNavBar from '../../atoms/TopNavBar';
import SideNavBar from '../../atoms/SideNavBar';
// import NbosMetricsCard from '../../molecules/NbosMetricsCard';
import NbosUserInfoTemplate from '../../templates/NbosUserInfoTemplate.js';
import NbosClientInfoTemplate from '../../templates/NbosClientInfoTemplate.js';
import NbosMetricsTemplate from '../../templates/NbosMetricsTemplate';

export function HomePage() {
  return (
    <div className="App tw-bg-gray-100">
      <SideNavBar />
      <TopNavBar />
      <section className="tw-h-full tw-mx-8 tw-pt-16">
        {/* <div className="tw-mx-8 tw-pt-16"> */}
        {/* <NbosSummaryDashBoardTemplate /> */}
        {/* Should I make a Template for the metric card to go on? */}
        {/* <NbosMetricsCard /> */}
        {/* </div> */}
        <div className="tw-flex tw-justify-around tw-mb-7">
          <NbosUserInfoTemplate />
          <NbosClientInfoTemplate />
        </div>
        <NbosMetricsTemplate />
      </section>
    </div>
  );
}

{
  /* <Link to="/edit" className="App-link">
            Edit Page
          </Link> */
}
