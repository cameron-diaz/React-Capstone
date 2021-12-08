import React from 'react';
import NbosSubTextBottomLabel from '../atoms/NbosSubTextBottomLabel';
import NbosSurfaceCard from '../atoms/NbosSurfaceCard';

export default function NbosSummaryInfo1() {
  return (
    <NbosSurfaceCard>
      <div className="tw-grid tw-grid-cols-3 tw-gap-6">
        <NbosSubTextBottomLabel
          topLabel="$519.09k"
          subTextLabel="TTM Avg Loan Balance"
        />
        <NbosSubTextBottomLabel
          topLabel="$549.13k"
          subTextLabel="TTM Avg Credit Commitments"
        />
        <NbosSubTextBottomLabel
          topLabel="$0.00"
          subTextLabel="TTM Deposit Balance"
        />
      </div>
    </NbosSurfaceCard>
  );
}

// wrap with divs for borders?
