import React from 'react';
import NbosMetricsSurfaceCard from '../atoms/NbosMetricsSurfaceCard';
import NbosMetricTitleText from '../atoms/NbosMetricTitleText';
// import NbosMetricSwitchToggle from '../atoms/NbosMetricSwitchToggle';
// import NbosOutcomeMetricsChart from '../atoms/NbosOutcomeMetricsChart';
import { NbosMetricsChart } from './NbosMetricsChart';
import NbosMetricToggle2 from '../atoms/NbosMetricToggle2';
// import NbosBehaviorMetricsChart from '../atoms/NbosBehaviorMetricsChart';

export default function NbosMetricsCard({
  userInfo,
  chartData,
  chartType,
  onChange,
}) {
  return (
    <NbosMetricsSurfaceCard>
      <div className="tw-flex tw-justify-between tw-p-4">
        <NbosMetricTitleText name={userInfo.userName} userInfo={userInfo} />
        <NbosMetricToggle2 changeHandler={onChange} />
      </div>
      <NbosMetricsChart chartData={chartData} chartType={chartType} />
      {/* <NbosOutcomeMetricsChart outcomeMetrics={outcomeMetrics} /> */}
      {/* <NbosBehaviorMetricsChart behaviorMetrics={behaviorMetrics} /> */}
    </NbosMetricsSurfaceCard>
  );
}
