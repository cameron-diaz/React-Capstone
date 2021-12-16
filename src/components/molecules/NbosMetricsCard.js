import React from 'react';
import NbosMetricsSurfaceCard from '../atoms/NbosMetricsSurfaceCard';
import NbosMetricTitleText from '../atoms/NbosMetricTitleText';
import NbosMetricSwitchToggle from '../atoms/NbosMetricSwitchToggle';
import NbosOutcomeMetricsChart from '../atoms/NbosOutcomeMetricsChart';

export default function NbosMetricsCard({ userInfo }) {
  return (
    <NbosMetricsSurfaceCard>
      <div className="tw-flex tw-justify-between tw-p-4">
        <NbosMetricTitleText name={userInfo.userName} />
        <NbosMetricSwitchToggle />
      </div>
      <NbosOutcomeMetricsChart />
    </NbosMetricsSurfaceCard>
  );
}
