import React from 'react';
import PropTypes from 'prop-types';

export default function NbosSubTextBottomLabel({ ...props }) {
  return (
    // self center?
    <div className="tw-max-w-auto tw-py-2 tw-px-4">
      <p className="tw-mr-auto tw-text-lg tw-flex tw-font-bold">
        {props.topLabel}
      </p>
      <p className="tw-text-gray-500 tw-text-xs tw-mr-auto tw-flex tw-text-left">
        {props.subTextLabel}
      </p>
    </div>
  );
}

NbosSubTextBottomLabel.propTypes = {
  topLabel: PropTypes.string,
  subTextLabel: PropTypes.string,
};
