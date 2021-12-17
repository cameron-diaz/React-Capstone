import React from 'react';
import PropTypes from 'prop-types';

export default function NbosMetricTitleText({ userInfo }) {
  return <div>{userInfo.userName} vs. This Time Last Year</div>;
}

NbosMetricTitleText.propTypes = {
  name: PropTypes.string,
};
