import React from 'react';
import PropTypes from 'prop-types';

export default function NbosMetricTitleText({ ...props }) {
  return <div>{props.name} vs. This Time Last Year</div>;
}

NbosMetricTitleText.propTypes = {
  name: PropTypes.string,
};
