import { React } from 'react';
import NbosSubTextBottomLabel from '../atoms/NbosSubTextBottomLabel';
import NbosSurfaceCard from '../atoms/NbosSurfaceCard';
import NbosRelationshipLabel from '../atoms/NbosRelationshipLabel';

export default function NbosClientInfo({ clientInfo }) {
  return (
    <NbosSurfaceCard>
      <div className="tw-grid tw-grid-cols-3 tw-h-full">
        <div className="tw-mr-auto tw-flex tw-justify-center tw-pl-4 tw-pt-6">
          <NbosRelationshipLabel
            topLabel={clientInfo.totalRelationships}
            subTextLabel="Total Relationships"
          />
        </div>
        <div className="tw-border-l-2 tw-flex tw-flex-col tw-justify-center tw-gap-y-[1.5rem]">
          <NbosSubTextBottomLabel
            topLabel={clientInfo.creditOnly}
            subTextLabel="Credit Only Relationship"
          />
          <NbosSubTextBottomLabel
            topLabel={clientInfo.highRelationships}
            subTextLabel="Relationships with <$25K TTM Revenue"
          />
        </div>
        <div className="tw-border-l-2 tw-flex tw-flex-col tw-justify-center tw-gap-y-[1.5rem]">
          <NbosSubTextBottomLabel
            topLabel={clientInfo.topProspects}
            subTextLabel="Top Prospects"
          />
          <NbosSubTextBottomLabel
            topLabel={clientInfo.suspects}
            subTextLabel="Suspects"
          />
        </div>
      </div>
    </NbosSurfaceCard>
  );
}

// git push https://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@github.com/cdiazit5/React-Capstone.git
//
