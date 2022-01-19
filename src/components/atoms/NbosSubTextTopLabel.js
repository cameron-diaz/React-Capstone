import React from 'react';
import PropTypes from 'prop-types';

export default function NbosSubTextTopLabel({ ...props }) {
  return (
    <div className="tw-max-w-auto tw-mb-3 tw-py-2">
      <p className="tw-text-gray-500 tw-text-sm tw-pb-1">
        {props.subTextLabel}
      </p>
      <p className="tw-text-base tw-font-bold"> {props.bottomLabel} </p>
    </div>
  );
}

NbosSubTextTopLabel.propTypes = {
  bottomLabel: PropTypes.string,
  subTextLabel: PropTypes.string,
};
