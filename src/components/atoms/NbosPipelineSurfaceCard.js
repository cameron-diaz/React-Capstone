import React from 'react';

export default function NbosPipelineSurfaceCard(props) {
  return (
    <div className="tw-shadow-md tw-bg-white">
      <div className="tw-border-b-2 tw-border-gray-100 tw-text-left tw-px-4 tw-py-2 tw-text-xl">
        Pipeline
      </div>
      {props.children}
    </div>
  );
}
