import React from 'react';
import PropTypes from 'prop-types';

export default function NbosMetricTitleText({ userInfo }) {
  return (
    <div className="tw-font-semibold tw-text-base">
      {userInfo.userName} vs. This Time Last Year
    </div>
  );
}

NbosMetricTitleText.propTypes = {
  name: PropTypes.string,
};
