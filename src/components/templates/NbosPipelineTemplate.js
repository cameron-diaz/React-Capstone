import React from 'react';
import NbosOpportunitySummaryChart from '../atoms/NbosOpportunitySummaryChart';
import NbosPipelineSurfaceCard from '../atoms/NbosPipelineSurfaceCard';
import NbosPipelineSwitchToggle from '../atoms/NbosPipelineSwitchToggle';

export default function NbosPipelineTemplate({ opportunitySummary }) {
  return (
    <div className="tw-mx-6 tw-mt-3">
      <NbosPipelineSurfaceCard>
        <NbosPipelineSwitchToggle />
        <NbosOpportunitySummaryChart opportunitySummary={opportunitySummary} />
      </NbosPipelineSurfaceCard>
    </div>
  );
}
