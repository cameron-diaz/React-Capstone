import React from 'react';
import NbosMetricsSurfaceCard from '../atoms/NbosMetricsSurfaceCard';
import NbosMetricTitleText from '../atoms/NbosMetricTitleText';
import NbosMetricSwitchToggle from '../atoms/NbosMetricSwitchToggle';
import NbosOutcomeMetricsChart from '../atoms/NbosOutcomeMetricsChart';
// import NbosBehaviorMetricsChart from '../atoms/NbosBehaviorMetricsChart';

export default function NbosMetricsCard({
  userInfo,
  outcomeMetrics,
  // behaviorMetrics,
}) {
  return (
    <NbosMetricsSurfaceCard>
      <div className="tw-flex tw-justify-between tw-p-4">
        <NbosMetricTitleText
          name={userInfo.userName}
          userInfo={userInfo}
          outcomeMetrics={outcomeMetrics}
        />
        <NbosMetricSwitchToggle />
      </div>
      <NbosOutcomeMetricsChart outcomeMetrics={outcomeMetrics} />
      {/* <NbosBehaviorMetricsChart behaviorMetrics={behaviorMetrics} /> */}
    </NbosMetricsSurfaceCard>
  );
}
