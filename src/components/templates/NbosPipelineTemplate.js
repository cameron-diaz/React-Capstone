import React from 'react';
import NbosOpportunitySummaryChart from '../atoms/NbosOpportunitySummaryChart';
import NbosPipelineSurfaceCard from '../atoms/NbosPipelineSurfaceCard';

export default function NbosPipelineTemplate({ opportunitySummary }) {
  return (
    <div className="tw-mx-6 tw-mt-3">
      <NbosPipelineSurfaceCard>
        <NbosOpportunitySummaryChart opportunitySummary={opportunitySummary} />
      </NbosPipelineSurfaceCard>
    </div>
  );
}
