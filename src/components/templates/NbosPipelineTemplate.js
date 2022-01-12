import React from 'react';
import { useState } from 'react';
// import useState from 'react';
import NbosOpportunitySummaryChart from '../atoms/NbosOpportunitySummaryChart';
import NbosPipelineOppGrid from '../atoms/NbosPipelineOppGrid';
import NbosPipelineSurfaceCard from '../atoms/NbosPipelineSurfaceCard';
import NbosPipelineSwitchToggle from '../atoms/NbosPipelineSwitchToggle';
import NbosTop5OppTag from '../atoms/NbosTop5OppTag';

export default function NbosPipelineTemplate({
  opportunitySummary,
  opportunityDetail,
}) {
  const [show5, showAll] = useState(true);
  const onClick = () => showAll(!show5);
  const newArrayTop5 = opportunityDetail.opportunities.slice(0, 5);
  newArrayTop5.sort();
  console.log('new array', newArrayTop5, show5);

  return (
    <div className="tw-mx-6 tw-mt-3">
      <NbosPipelineSurfaceCard>
        <NbosPipelineSwitchToggle />
        <NbosOpportunitySummaryChart opportunitySummary={opportunitySummary} />
        {/* <div>
          <NbosTop5OppTag />
          {show5 ? (
            <NbosPipelineOppGrid opportunityDetail={newArrayTop5} />
          ) : (
            <NbosPipelineOppGrid opportunityDetail={opportunityDetail} />
          )}
        </div> */}
        <div>
          <NbosTop5OppTag />
          <NbosPipelineOppGrid
            opportunityDetail={opportunityDetail}
            top5={newArrayTop5.sort()}
            show5={show5}
          />
        </div>
        <button onClick={onClick}>
          {show5 ? 'View Full Pipeline' : 'View Top 5'}
        </button>
      </NbosPipelineSurfaceCard>
    </div>
  );
}

// watcher on prop oppDetail. two states for top 5 (default)
// splice into new array, set row data to new array for top 5
