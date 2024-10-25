import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import PropTypes from 'prop-types';
import './Header.css';

import messages from './messages';

const SmallLayout = ({ fullName }) => {
  const { formatMessage } = useIntl();

  return (
    <header className="header" role="banner" aria-labelledby="header-heading">
      <h2 id="header-heading" className="sr-only">Aspen Publishing Header</h2>
      <div className="header-container">
        <div className="header-logo">
          <a href={getConfig().MARKETING_SITE_BASE_URL} className="header-logo-link" aria-label="Aspen Publishing Homepage">
            <img src={getConfig().LOGO_WHITE_URL} alt={getConfig().SITE_NAME} className="header-logo-img" />
          </a>
        </div>
      </div>
    </header>
  );
};

SmallLayout.propTypes = {
  fullName: PropTypes.string.isRequired,
};

export default SmallLayout;
