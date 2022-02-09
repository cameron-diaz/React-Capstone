import React from 'react';
import PropTypes from 'prop-types';

export default function NbosSurfaceCard(props) {
  return (
    <div className="tw-shadow-md tw-bg-white tw-h-full">{props.children}</div>
  );
}

NbosSurfaceCard.propTypes = {
  bottomLabel: PropTypes.string,
  subTextLabel: PropTypes.string,
};
