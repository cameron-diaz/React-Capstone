import React from 'react';
import NbosMetricsSurfaceCard from '../atoms/NbosMetricsSurfaceCard';
import NbosMetricTitleText from '../atoms/NbosMetricTitleText';
import NbosMetricToggle from '../atoms/NbosMetricToggle';
import NbosOutcomeMetricsChart from '../atoms/NbosOutcomeMetricsChart';

export default function NbosMetricsCard() {
  return (
    <NbosMetricsSurfaceCard>
      <div className="tw-flex tw-justify-between tw-bg-transparent">
        <NbosMetricTitleText name="Patrick Barnes" />
        <NbosMetricToggle />
      </div>
      <NbosOutcomeMetricsChart />
    </NbosMetricsSurfaceCard>
  );
}
