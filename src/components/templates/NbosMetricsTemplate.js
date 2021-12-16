import React from 'react';
import NbosMetricsCard from '../molecules/NbosMetricsCard';

export default function NbosMetricsTemplate({ userInfo }) {
  return (
    <div className="tw-mx-6">
      <NbosMetricsCard userInfo={userInfo} />
    </div>
  );
}
