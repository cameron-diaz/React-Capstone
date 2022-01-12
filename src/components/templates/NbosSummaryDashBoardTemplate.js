import React from 'react';
import NbosClientInfo from '../molecules/NbosClientInfo';
import NbosUserInfo from '../molecules/NbosUserInfo';
import NbosSummaryInfo1 from '../molecules/NbosSummaryInfo1';
import NbosSummaryInfo2 from '../molecules/NbosSummaryInfo2';

export default function NbosSummaryDashBoardTemp() {
  return (
    <div className="tw-grid tw-grid-cols-2">
      <div className="tw-px-12">
        <NbosUserInfo />
      </div>
      <div className=" tw-flex tw-flex-col tw-justify-evenly ">
        <div className="client-info">
          <NbosClientInfo />
        </div>
        <div>
          <NbosSummaryInfo1 />
        </div>
        <div>
          <NbosSummaryInfo2 />
        </div>
      </div>
    </div>
  );
}
