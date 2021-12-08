import React from 'react';
import PropTypes from 'prop-types';

export default function NbosRelationshipLabel({ ...props }) {
  return (
    <div className=" tw-flex tw-justify-center tw tw-flex-col tw-items-end tw-max-w-auto tw-mb-3 tw-py-2 tw-px-4">
      <p className="tw-text-5xl tw-mr-auto tw-pb-3">{props.topLabel}</p>
      <p className="tw-text-gray-500 tw-text-sm tw-mr-auto">
        {props.subTextLabel}
      </p>
    </div>
  );
}

NbosRelationshipLabel.propTypes = {
  topLabel: PropTypes.string,
  subTextLabel: PropTypes.string,
};
