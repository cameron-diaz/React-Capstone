import React from 'react';
import PropTypes from 'prop-types';

export default function NbosSubTextTopLabel({ ...props }) {
  return (
    <div className="tw-max-w-auto tw-mb-3 tw-py-2 tw-px-4">
      <p className="tw-text-gray-500 tw-text-sm">{props.subTextLabel}</p>
      <p className=""> {props.bottomLabel} </p>
    </div>
  );
}

NbosSubTextTopLabel.propTypes = {
  bottomLabel: PropTypes.string,
  subTextLabel: PropTypes.string,
};
