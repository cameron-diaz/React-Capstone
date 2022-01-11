import React from 'react';
import NbosOpportunitySummaryChart from '../atoms/NbosOpportunitySummaryChart';
import NbosPipelineOppGrid from '../atoms/NbosPipelineOppGrid';
import NbosPipelineSurfaceCard from '../atoms/NbosPipelineSurfaceCard';
import NbosPipelineSwitchToggle from '../atoms/NbosPipelineSwitchToggle';
import NbosTop5OppTag from '../atoms/NbosTop5OppTag';

export default function NbosPipelineTemplate({
  opportunitySummary,
  opportunityDetail,
}) {
  return (
    <div className="tw-mx-6 tw-mt-3">
      <NbosPipelineSurfaceCard>
        <NbosPipelineSwitchToggle />
        <NbosOpportunitySummaryChart opportunitySummary={opportunitySummary} />
        <div>
          <NbosTop5OppTag />
          <NbosPipelineOppGrid opportunityDetail={opportunityDetail} />
        </div>
      </NbosPipelineSurfaceCard>
    </div>
  );
}

// watcher on prop oppDetail. two states for top 5 (default)
// splice into new array, set row data to new array for top 5
