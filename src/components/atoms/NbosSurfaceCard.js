import React from 'react';

export default function NbosSurfaceCard(props) {
  return (
    <div className="tw-shadow-md tw-bg-transparent tw-bg-gray-100 tw-w-96">
      {props.children}
    </div>
  );
}
