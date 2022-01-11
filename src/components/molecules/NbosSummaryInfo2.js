import React from 'react';
import NbosSubTextBottomLabel from '../atoms/NbosSubTextBottomLabel';
import NbosSubTextBottomLeftBorder from '../atoms/NbosSubTextBottomLeftBorder';
import NbosSurfaceCard from '../atoms/NbosSurfaceCard';

export default function NbosSummaryInfo2({ summary2 }) {
  return (
    <NbosSurfaceCard>
      <div className="tw-grid tw-grid-cols-3 tw-items-center tw-min-h-[100px]">
        <NbosSubTextBottomLabel
          topLabel={summary2.rev}
          subTextLabel="TTM Revenue"
        />
        <NbosSubTextBottomLeftBorder
          topLabel={summary2.avgRaroc}
          subTextLabel="TTM AVG. RAROC"
        />
        <NbosSubTextBottomLeftBorder
          topLabel={summary2.freeEquivCardLoadComm}
          subTextLabel="Free Equivalent + Card % Loan Commit"
        />
      </div>
    </NbosSurfaceCard>
  );
}
