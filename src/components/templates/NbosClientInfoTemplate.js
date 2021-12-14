import React from 'react';
import './NbosClientInfo.css';
import NbosClientInfo from '../molecules/NbosClientInfo';
import NbosSummaryInfo1 from '../molecules/NbosSummaryInfo1';
import NbosSummaryInfo2 from '../molecules/NbosSummaryInfo2';

export default function NbosClientInfoTemplate() {
  return (
    <div className=" tw-flex tw-flex-col tw-justify-between">
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
  );
}
