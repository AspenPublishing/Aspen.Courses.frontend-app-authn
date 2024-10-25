import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const LargeLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="w-50 d-flex">
      <div className="col-md-9">
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
          <Image className="logo position-absolute ml-6 mt-6" style={{ width: '150px' }} alt={getConfig().SITE_NAME} src={getConfig().LOGO_URL} />
        </Hyperlink>
      </div>
    </div>
  );
};

export default LargeLayout;
