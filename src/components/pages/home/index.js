import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import { fetchUserInfo } from '../../../store/userSlice';
import TopNavBar from '../../atoms/TopNavBar';
import SideNavBar from '../../atoms/SideNavBar';
import NbosUserInfoTemplate from '../../templates/NbosUserInfoTemplate.js';
import NbosClientInfoTemplate from '../../templates/NbosClientInfoTemplate.js';
import NbosMetricsTemplate from '../../templates/NbosMetricsTemplate';

export function HomePage() {
  const userInfo = useSelector(state => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  });

  return (
    <div className="App tw-bg-gray-100 tw-h-screen">
      <SideNavBar />
      <TopNavBar />
      <section className="tw-h-full tw-mx-8 tw-pt-16">
        {/* <div className="tw-mx-8 tw-pt-16"> */}
        {/* <NbosSummaryDashBoardTemplate /> */}
        {/* Should I make a Template for the metric card to go on? */}
        {/* <NbosMetricsCard /> */}
        {/* </div> */}
        <div className="tw-flex tw-justify-between tw-mb-7 tw-mx-6">
          <NbosUserInfoTemplate userInfo={userInfo} />
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
