import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import { fetchUserInfo } from '../../../store/userSlice';
import { fetchClientInfo } from '../../../store/clientRelationSlice';
import TopNavBar from '../../atoms/TopNavBar';
import SideNavBar from '../../atoms/SideNavBar';
import NbosUserInfoTemplate from '../../templates/NbosUserInfoTemplate.js';
import NbosClientInfoTemplate from '../../templates/NbosClientInfoTemplate.js';
import NbosMetricsTemplate from '../../templates/NbosMetricsTemplate';
import NbosPipelineSurfaceCard from '../../atoms/NbosPipelineSurfaceCard';
import { fetchSummary1 } from '../../../store/summary1Slice';
import { fetchSummary2 } from '../../../store/summary2Slice';
import { fetchOutcomeMetrics } from '../../../store/outcomeMetricsSlice';

export function HomePage() {
  const userInfo = useSelector(state => state.userInfo);
  const clientInfo = useSelector(state => state.clientInfo);
  const summary1 = useSelector(state => state.summary1);
  const summary2 = useSelector(state => state.summary2);
  const outcomeMetrics = useSelector(state => state.outcomeMetrics);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(fetchUserInfo());
    await dispatch(fetchClientInfo());
    await dispatch(fetchSummary1());
    await dispatch(fetchSummary2());
    await dispatch(fetchOutcomeMetrics());
  });

  return (
    <div className="App tw-bg-gray-100 tw-h-screen">
      <SideNavBar />
      <TopNavBar />
      <section className="tw-h-full tw-mx-8 tw-pt-16">
        <div className="tw-flex tw-justify-between tw-mb-7 tw-mx-6">
          <NbosUserInfoTemplate userInfo={userInfo} />
          <NbosClientInfoTemplate
            clientInfo={clientInfo}
            summary1={summary1}
            summary2={summary2}
          />
        </div>
        <NbosMetricsTemplate
          userInfo={userInfo}
          outcomeMetrics={outcomeMetrics}
        />
        <NbosPipelineSurfaceCard />
      </section>
    </div>
  );
}
