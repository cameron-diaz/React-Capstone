import React from 'react';
import NbosClientInfo from '../molecules/NbosClientInfo';
import NbosUserInfo from '../molecules/NbosUserInfo';
import NbosSummaryInfo1 from '../molecules/NbosSummaryInfo1';
import NbosSummaryInfo2 from '../molecules/NbosSummaryInfo2';

export default function NbosSummaryDashBoardTemp() {
  return (
    // <div className="tw-grid tw-grid-cols-4 tw-grid-rows-3 tw-items-center tw-p-2 tw-gap-3">
    //   <div className="tw-row-span-3 tw-self-start">
    //     <NbosUserInfo />
    //   </div>
    //   <div className="tw-col-span-3 tw-self-start">
    //     <NbosClientInfo />
    //   </div>
    //   <div className="tw-col-span-3 tw-self-center">
    //     <NbosSummaryInfo1 />
    //   </div>
    //   <div className="tw-col-span-3 tw-self-end">
    //     <NbosSummaryInfo2 />
    //   </div>
    // </div>

    <div className="tw-grid tw-grid-cols-3 tw-items-center tw-p-2 tw-gap-2 tw-space-x-1">
      <div className="">
        <NbosUserInfo />
      </div>
      <div className="tw-grid tw-grid-rows-3 tw-ml-8 tw-gap-7 tw-col-span-2 tw-self-stretch">
        <div className="tw-row-span-2">
          <NbosClientInfo />
        </div>
        <NbosSummaryInfo1 />
        <NbosSummaryInfo2 />
      </div>
    </div>
  );
}
