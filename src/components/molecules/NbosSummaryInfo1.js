import React from 'react';
import NbosSubTextBottomLabel from '../atoms/NbosSubTextBottomLabel';
import NbosSurfaceCard from '../atoms/NbosSurfaceCard';

export default function NbosSummaryInfo1({ summary1 }) {
  return (
    <NbosSurfaceCard>
      <div className="tw-grid tw-grid-cols-3 tw-min-h-[100px] tw-items-center">
        <NbosSubTextBottomLabel
          topLabel={summary1.avgLoanBal}
          subTextLabel="TTM Avg Loan Balance"
        />
        <div className="tw-border-l-2">
          <NbosSubTextBottomLabel
            topLabel={summary1.avgCreditComm}
            subTextLabel="TTM Avg Credit Commitments"
          />
        </div>
        <div className="tw-border-l-2">
          <NbosSubTextBottomLabel
            topLabel={summary1.depBal}
            subTextLabel="TTM Deposit Balance"
          />
        </div>
      </div>
    </NbosSurfaceCard>
  );
}

// wrap with divs for borders?
// content not reacting bottom of card
