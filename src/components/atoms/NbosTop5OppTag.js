import React from 'react';

export default function NbosTop5OppTag({ show5 }) {
  return (
    <div className="tw-w-[9rem]">
      <div className=" tw-w-[100%] tw-border-b-2 tw-font-medium tw-pb-2 tw-border-blue-700 tw-ml-10 tw-mb-0 after:tw-inline-block">
        {show5 ? 'Top 5 Opportunities' : 'All Opportunities'}
      </div>
    </div>
  );
}
