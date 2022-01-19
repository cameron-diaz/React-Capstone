import React from 'react';
import NbosMetricsCard from '../organisms/NbosMetricsCard';

export default function NbosMetricsTemplate({
  userInfo,
  outcomeMetrics,
  behaviorMetrics,
  chartData,
  chartType,
  onChange,
}) {
  return (
    <div className="tw-mx-6">
      <NbosMetricsCard
        userInfo={userInfo}
        outcomeMetrics={outcomeMetrics}
        behaviorMetrics={behaviorMetrics}
        onChange={onChange}
        chartType={chartType}
        chartData={chartData}
      />
    </div>
  );
}
