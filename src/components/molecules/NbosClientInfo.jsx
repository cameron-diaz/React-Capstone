import { React } from 'react';
import NbosSubTextBottomLabel from '../atoms/NbosSubTextBottomLabel';
import NbosSurfaceCard from '../atoms/NbosSurfaceCard';
import NbosRelationshipLabel from '../atoms/NbosRelationshipLabel';

export default function NbosClientInfo() {
  return (
    <NbosSurfaceCard>
      <div className="tw-grid tw-grid-cols-3">
        <div className="tw-mr-auto tw-flex tw-justify-center tw-pl-4 tw-pt-6">
          <NbosRelationshipLabel
            topLabel="56"
            subTextLabel="Total Relationships"
          />
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

// git push https://<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>/cdiazit5/React-Capstone.git
// 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
