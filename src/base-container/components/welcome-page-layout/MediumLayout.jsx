import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import PropTypes from 'prop-types';

import messages from './messages';

const MediumLayout = ({ fullName }) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <div className="w-100 medium-screen-top-stripe" />
      <div className="w-100 p-0 mb-3 d-flex">
        <div className="col-md-10">
          <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
            <Image className="logo" alt={getConfig().SITE_NAME} src={getConfig().LOGO_WHITE_URL} />
          </Hyperlink>
        </div>
      </div>
    </>
  );
};

MediumLayout.propTypes = {
  fullName: PropTypes.string.isRequired,
};

export default MediumLayout;
