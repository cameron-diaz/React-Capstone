import React from 'react';
import PropTypes from 'prop-types';
// import { clienttable } from 'src/assets/usertable.json';

export default function NbosSubTextBottomLabel() {
  return (
    <div className="tw-max-w-auto tw-mb-3 tw-py-2 tw-px-4">
      <p className="tw-font-bold tw-mr-auto tw-flex">14</p>
      <p className="tw-text-gray-500 tw-text-sm tw-mr-auto tw-flex">
        Top Prospects
      </p>
    </div>
  );
}

NbosSubTextBottomLabel.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  wrap: PropTypes.bool,
};
