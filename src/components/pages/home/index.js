import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import { fetchUserInfo } from '../../../store/userSlice';
import { fetchClientInfo } from '../../../store/clientRelationSlice';
import TopNavBar from '../../atoms/TopNavBar';
import SideNavBar from '../../atoms/SideNavBar';
import NbosUserInfoTemplate from '../../templates/NbosUserInfoTemplate.js';
import NbosClientInfoTemplate from '../../templates/NbosClientInfoTemplate.js';
import NbosMetricsTemplate from '../../templates/NbosMetricsTemplate';
import { fetchSummary1 } from '../../../store/summary1Slice';
import { fetchSummary2 } from '../../../store/summary2Slice';
import { fetchOutcomeMetrics } from '../../../store/outcomeMetricsSlice';
import { fetchBehaviorMetrics } from '../../../store/behaviorMetricsSlice';
import { fetchOpportunityDetail } from '../../../store/opportunityDetailSlice';
import NbosPipelineTemplate from '../../templates/NbosPipelineTemplate';
import { fetchOpportunitySummary } from '../../../store/opportunitySummarySlice';

export function HomePage() {
  const userInfo = useSelector(state => state.userInfo);
  const clientInfo = useSelector(state => state.clientInfo);
  const summary1 = useSelector(state => state.summary1);
  const summary2 = useSelector(state => state.summary2);
  const outcomeMetrics = useSelector(state => state.outcomeMetrics);
  const behaviorMetrics = useSelector(state => state.behaviorMetrics);
  const opportunitySummary = useSelector(state => state.opportunitySummary);
  const opportunityDetail = useSelector(state => state.opportunityDetail);
  const dispatch = useDispatch();

  const [metricsData, setMetricsData] = useState('outcome');

  const handleMetricToggle = async value => {
    setMetricsData(value);
    if (value === 'behavior ' && behaviorMetrics.length === 0) {
      await dispatch(fetchBehaviorMetrics());
    } else if (value === 'outcome' && outcomeMetrics.length === 0) {
      await dispatch(fetchOutcomeMetrics());
    }
    console.log(value);
  };
  useEffect(async () => {
    await dispatch(fetchUserInfo());
    await dispatch(fetchClientInfo());
    await dispatch(fetchSummary1());
    await dispatch(fetchSummary2());
    await dispatch(fetchOutcomeMetrics());
    await dispatch(fetchBehaviorMetrics());
    await dispatch(fetchOpportunitySummary());
    await dispatch(fetchOpportunityDetail());
  }, []);

  return (
    <div className="App tw-bg-gray-100 tw-h-screen">
      <section className="tw-h-auto tw-mx-8 tw-pt-16">
        <SideNavBar />
        <TopNavBar />
        <div className="tw-flex tw-justify-between tw-mb-7 tw-mx-6 tw-gap-x-4">
          <NbosUserInfoTemplate userInfo={userInfo} />
          <NbosClientInfoTemplate
            clientInfo={clientInfo}
            summary1={summary1}
            summary2={summary2}
          />
        </div>
        <div>
          <NbosMetricsTemplate
            userInfo={userInfo}
            outcomeMetrics={outcomeMetrics}
            behaviorMetrics={behaviorMetrics}
            onChange={handleMetricToggle}
            chartType={metricsData}
            chartData={
              metricsData === 'behavior' ? behaviorMetrics : outcomeMetrics
            }
          />
          <NbosPipelineTemplate
            opportunitySummary={opportunitySummary}
            opportunityDetail={opportunityDetail}
          />
        </div>
      </section>
    </div>
  );
}
