import React from 'react';
import NbosSubTextBottomLabel from '../atoms/NbosSubTextBottomLabel';
import NbosSurfaceCard from '../atoms/NbosSurfaceCard';

export default function NbosSummaryInfo2({ summary2 }) {
  return (
    <NbosSurfaceCard>
      <div className="tw-grid tw-grid-cols-3 tw-content-end">
        <NbosSubTextBottomLabel
          topLabel={summary2.rev}
          subTextLabel="TTM Revenue"
        />
        <div className="tw-border-l-2">
          <NbosSubTextBottomLabel
            topLabel={summary2.avgRaroc}
            subTextLabel="TTM AVG. RAROC"
          />
        </div>
        <div className="tw-border-l-2">
          <NbosSubTextBottomLabel
            topLabel={summary2.freeEquivCardLoadComm}
            subTextLabel="Free Equivalent + Card % Loan Commit"
          />
        </div>
      </div>
    </NbosSurfaceCard>
  );
}
