import { React } from 'react';
import NbosSubTextBottomLabel from '../atoms/NbosSubTextBottomLabel';
import NbosSurfaceCard from '../atoms/NbosSurfaceCard';
import NbosRelationshipLabel from '../atoms/NbosRelationshipLabel';

export default function NbosClientInfo() {
  return (
    <NbosSurfaceCard>
      <div className="tw-grid tw-grid-cols-3">
        <div className="tw-mr-auto tw-flex tw-justify-center tw-pl-4 tw-pt-6">
          <NbosRelationshipLabel />
        </div>
        <div className="tw-border-l-2">
          <NbosSubTextBottomLabel
            topLabel="4"
            subTextLabel="Credit Only Relationship"
          />
          <NbosSubTextBottomLabel
            topLabel="6"
            subTextLabel="Relationships with <$25K TTM Revenue"
          />
        </div>
        <div className="tw-border-l-2">
          <NbosSubTextBottomLabel topLabel="14" subTextLabel="Top Prospects" />
          <NbosSubTextBottomLabel topLabel="0" subTextLabel="Suspects" />
        </div>
      </div>
    </NbosSurfaceCard>
  );
}
//  Should I wrap the content here in a Surface component?
// Grid 1/3
// git push https://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@github.com/cdiazit5/React-Capstone.git
