import React from 'react';
import PropTypes from 'prop-types';

export default function NbosSubTextBottomLeftBorder({ ...props }) {
  return (
    // self center?
    <div className="tw-border-l-2 tw-h-full tw-items-center tw-flex">
      <div className="tw-max-w-auto tw-py-2 tw-px-4 tw-self-center">
        <p className="tw-mr-auto tw-text-md tw-flex tw-font-bold">
          {props.topLabel}
        </p>
        <p className="tw-text-gray-500 tw-text-xs tw-mr-auto tw-flex tw-text-left">
          {props.subTextLabel}
        </p>
      </div>
    </div>
  );
}

NbosSubTextBottomLeftBorder.propTypes = {
  topLabel: PropTypes.string,
  subTextLabel: PropTypes.string,
};
