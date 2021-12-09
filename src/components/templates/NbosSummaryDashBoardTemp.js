import React from 'react';
import NbosClientInfo from '../molecules/NbosClientInfo';
import NbosUserInfo from '../molecules/NbosUserInfo';
import NbosSummaryInfo1 from '../molecules/NbosSummaryInfo1';
import NbosSummaryInfo2 from '../molecules/NbosSummaryInfo2';

export default function NbosSummaryDashBoardTemp() {
  return (
    <div className="tw-flex tw-items-center">
      <NbosUserInfo />
      <div className="tw-grid tw-grid-rows-3 tw-gap-4">
        <NbosClientInfo />
        <NbosSummaryInfo1 />
        <NbosSummaryInfo2 />
      </div>
    </div>
  );
}
