import React from 'react';
import PropTypes from 'prop-types';

export default function NbosSubTextBottomLabel({ ...props }) {
  return (
    <div className="tw-max-w-auto tw-mb-3 tw-py-2 tw-px-4">
      <p className="tw-mr-auto tw-flex"> {props.topLabel} </p>
      <p className="tw-text-gray-500 tw-text-sm tw-mr-auto tw-flex">
        {props.subTextLabel}
      </p>
    </div>
  );
}

NbosSubTextBottomLabel.propTypes = {
  topLabel: PropTypes.string,
  subTextLabel: PropTypes.string,
};
