import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import PropTypes from 'prop-types';

import messages from './messages';

const SmallLayout = ({ fullName }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="min-vw-100">
      <div className="col-md-12 small-screen-top-stripe" />
      <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
        <Image className="logo-small" alt={getConfig().SITE_NAME} src={getConfig().LOGO_WHITE_URL} />
      </Hyperlink>
    </div>
  );
};

SmallLayout.propTypes = {
  fullName: PropTypes.string.isRequired,
};

export default SmallLayout;
