import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const MediumLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <div className="w-100 medium-screen-top-stripe" />
      <div className="w-100 p-0 mb-3 d-flex">
        <div className="col-md-10">
          <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
            <Image alt={getConfig().SITE_NAME} className="logo" src={getConfig().LOGO_URL} />
          </Hyperlink>
        </div>
      </div>
    </>
  );
};

export default MediumLayout;
