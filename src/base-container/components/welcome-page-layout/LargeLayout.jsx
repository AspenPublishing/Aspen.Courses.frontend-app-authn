import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import PropTypes from 'prop-types';
import './Header.css';

import messages from './messages';

const LargeLayout = ({ fullName }) => {
  const { formatMessage } = useIntl();

  return (
    <header className="mx-auto flex flex-col lg:flex-row justify-between items-start py-8 px-6 lg:px-0 container-xl" role="banner" aria-labelledby="header-heading">
      <h2 id="header-heading" className="sr-only">Aspen Publishing Header</h2>
      <div className="">
        <div className="header-logo">
          <a href={getConfig().MARKETING_SITE_BASE_URL} className="header-logo-link" aria-label="Aspen Publishing Homepage">
            <img src={getConfig().LOGO_URL} alt={getConfig().SITE_NAME} className="header-logo-img" />
          </a>
        </div>
      </div>
    </header>
  );
};

LargeLayout.propTypes = {
  fullName: PropTypes.string.isRequired,
};

export default LargeLayout;
