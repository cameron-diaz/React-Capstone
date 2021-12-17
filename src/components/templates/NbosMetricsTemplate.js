import React from 'react';
import NbosMetricsCard from '../molecules/NbosMetricsCard';

export default function NbosMetricsTemplate({ userInfo, outcomeMetrics }) {
  return (
    <div className="tw-mx-6">
      <NbosMetricsCard userInfo={userInfo} outcomeMetrics={outcomeMetrics} />
    </div>
  );
}
