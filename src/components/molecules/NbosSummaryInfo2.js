import React from 'react';
import NbosSubTextBottomLabel from '../atoms/NbosSubTextBottomLabel';
import NbosSurfaceCard from '../atoms/NbosSurfaceCard';

export default function NbosSummaryInfo2() {
  return (
    <NbosSurfaceCard>
      <div className="tw-grid tw-grid-cols-3">
        <NbosSubTextBottomLabel topLabel="$518.89" subTextLabel="TTM Revenue" />
        <NbosSubTextBottomLabel
          topLabel="4.41%"
          subTextLabel="TTM AVG. RAROC"
        />
        <NbosSubTextBottomLabel
          topLabel="0.94%"
          subTextLabel="Free Equivalent + Card % Loan Commit"
        />
      </div>
    </NbosSurfaceCard>
  );
}
