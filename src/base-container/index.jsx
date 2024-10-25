import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { breakpoints } from '@openedx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import { AuthLargeLayout, AuthMediumLayout, AuthSmallLayout } from './components/welcome-page-layout';

const BaseContainer = ({ children, showWelcomeBanner, fullName }) => {
  const enableImageLayout = getConfig().ENABLE_IMAGE_LAYOUT;

  if (enableImageLayout) {
    return (
      <div className="">
        <MediaQuery maxWidth={breakpoints.extraSmall.maxWidth - 1}>
          { <AuthSmallLayout fullName={fullName} /> }
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.small.minWidth} maxWidth={breakpoints.small.maxWidth - 1}>
          { <AuthSmallLayout fullName={fullName} /> }
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.medium.minWidth} maxWidth={breakpoints.large.maxWidth - 1}>
          { <AuthMediumLayout fullName={fullName} /> }
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.extraLarge.minWidth}>
          { <AuthLargeLayout fullName={fullName} /> }
        </MediaQuery>
        <div className={classNames('content', { 'align-items-center mt-0': showWelcomeBanner })}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="col-md-12 extra-large-screen-top-stripe" />
      <div className="">
        <MediaQuery maxWidth={breakpoints.small.maxWidth - 1}>
          { <AuthSmallLayout fullName={fullName} /> }
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.medium.minWidth} maxWidth={breakpoints.large.maxWidth - 1}>
          { <AuthMediumLayout fullName={fullName} /> }
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.extraLarge.minWidth}>
          { <AuthLargeLayout fullName={fullName} /> }
        </MediaQuery>
        <div className={classNames('content', { 'align-items-center mt-0': showWelcomeBanner })}>
          {children}
        </div>
      </div>
    </>
  );
};

BaseContainer.defaultProps = {
  showWelcomeBanner: false,
  fullName: null,
};

BaseContainer.propTypes = {
  children: PropTypes.node.isRequired,
  showWelcomeBanner: PropTypes.bool,
  fullName: PropTypes.string,
};

export default BaseContainer;
