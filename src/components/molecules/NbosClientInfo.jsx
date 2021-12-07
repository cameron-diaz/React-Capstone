import { React } from 'react';
import NbosSubTextBottomLabel from '../atoms/NbosSubTextBottomLabel';
// import NbosSurfaceCard from '../atoms/NbosSurfaceCard';

export default function NbosClientInfo() {
  return (
    <div className="tw-pr-2 tw-w-96 tw-grid tw-grid-cols-2 tw-grid-rows-2 tw-h-auto">
      <NbosSubTextBottomLabel />
      <NbosSubTextBottomLabel />
      <NbosSubTextBottomLabel />
      <NbosSubTextBottomLabel />
    </div>
  );
}
