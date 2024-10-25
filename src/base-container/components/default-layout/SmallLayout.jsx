import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const SmallLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <span className="w-100">
      <div className="col-md-12 small-screen-top-stripe" />
      <div>
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
          <Image className="logo-small" alt={getConfig().SITE_NAME} src={getConfig().LOGO_URL} />
        </Hyperlink>
      </div>
    </span>
  );
};

export default SmallLayout;
