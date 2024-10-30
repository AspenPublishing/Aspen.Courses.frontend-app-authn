import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getConfig } from '@edx/frontend-platform';
import { sendPageEvent, sendTrackEvent } from '@edx/frontend-platform/analytics';
import { getAuthService } from '@edx/frontend-platform/auth';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Icon,
  Tab,
  Tabs,
} from '@openedx/paragon';
import { ChevronLeft } from '@openedx/paragon/icons';
import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';

import BaseContainer from '../base-container';
import { clearThirdPartyAuthContextErrorMessage } from '../common-components/data/actions';
import {
  tpaProvidersSelector,
} from '../common-components/data/selectors';
import messages from '../common-components/messages';
import { LOGIN_PAGE, REGISTER_PAGE } from '../data/constants';
import {
  getTpaHint, getTpaProvider, updatePathWithQueryParams,
} from '../data/utils';
import { LoginPage } from '../login';
import { backupLoginForm } from '../login/data/actions';
import { RegistrationPage } from '../register';
import { backupRegistrationForm } from '../register/data/actions';

const Logistration = (props) => {
  const { selectedPage, tpaProviders } = props;
  const tpaHint = getTpaHint();
  const {
    providers, secondaryProviders,
  } = tpaProviders;
  const { formatMessage } = useIntl();
  const [institutionLogin, setInstitutionLogin] = useState(false);
  const [key, setKey] = useState('');
  const navigate = useNavigate();
  const disablePublicAccountCreation = getConfig().ALLOW_PUBLIC_ACCOUNT_CREATION === false;
  const hideRegistrationLink = getConfig().SHOW_REGISTRATION_LINKS === false;

  useEffect(() => {
    const authService = getAuthService();
    if (authService) {
      authService.getCsrfTokenService().getCsrfToken(getConfig().LMS_BASE_URL);
    }
  });

  useEffect(() => {
    if (disablePublicAccountCreation) {
      navigate(updatePathWithQueryParams(LOGIN_PAGE));
    }
  }, [navigate, disablePublicAccountCreation]);

  const handleInstitutionLogin = (e) => {
    sendTrackEvent('edx.bi.institution_login_form.toggled', { category: 'user-engagement' });
    if (typeof e === 'string') {
      sendPageEvent('login_and_registration', e === '/login' ? 'login' : 'register');
    } else {
      sendPageEvent('login_and_registration', e.target.dataset.eventName);
    }

    setInstitutionLogin(!institutionLogin);
  };

  const handleOnSelect = (tabKey, currentTab) => {
    if (tabKey === currentTab) {
      return;
    }
    sendTrackEvent(`edx.bi.${tabKey.replace('/', '')}_form.toggled`, { category: 'user-engagement' });
    props.clearThirdPartyAuthContextErrorMessage();
    if (tabKey === LOGIN_PAGE) {
      props.backupRegistrationForm();
    } else if (tabKey === REGISTER_PAGE) {
      props.backupLoginForm();
    }
    setKey(tabKey);
  };

  const tabTitle = (
    <div className="d-flex">
      <Icon src={ChevronLeft} className="left-icon" />
      <span className="ml-2">
        {selectedPage === LOGIN_PAGE
          ? formatMessage(messages['logistration.sign.in'])
          : formatMessage(messages['logistration.register'])}
      </span>
    </div>
  );

  const isValidTpaHint = () => {
    const { provider } = getTpaProvider(tpaHint, providers, secondaryProviders);
    return !!provider;
  };

  return (
    <BaseContainer>
      <div>
        {disablePublicAccountCreation
          ? (
            <>
              {institutionLogin && (
                <Tabs defaultActiveKey="" id="controlled-tab" onSelect={handleInstitutionLogin}>
                  <Tab title={tabTitle} eventKey={LOGIN_PAGE} />
                </Tabs>
              )}
              <div class="content-wrapper">
                <div id="main-content" className="main-content">
                  <svg className="corner-vector" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_6115_32366" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="7" y="7" width="55" height="55">
                      <path d="M60.8105 61.0994L60.8105 61.0994C7.33007 7.04239 7.33007 7.04239L7.33007 7.04239L61.0988 7.33064L60.8105 61.0994Z" fill="#F2D383"/>
                    </mask>
                    <g mask="url(#mask0_6115_32366)">
                      <path d="M9.51773 70.0481C2.62366 70.034 -2.97413 64.4144 -2.96 57.5193L-2.86419 10.7718C-8.86691 14.789 -12.825 21.6245 -12.8409 29.3898L-12.8985 57.4989C-12.9239 69.8932 -2.89708 79.9624 9.49735 79.9878L37.6064 80.0455C45.3718 80.0614 52.223 76.1302 56.2646 70.144L9.51773 70.0481Z" fill="#FAA422"/>
                      <path d="M56.4109 7.08878L50.8359 7.07735C50.2617 8.64603 49.62 10.2629 48.9025 11.9245C48.4952 12.8665 49.6785 13.6905 50.4108 12.9711L56.4109 7.08878Z" fill="#FAA422"/>
                      <path d="M15.2044 7.00443L9.64822 6.99305C7.30239 6.98824 5.04052 7.34512 2.91391 8.00869L2.82104 53.3228C2.81887 54.3807 4.28819 54.648 4.65564 53.6572C12.5145 32.4831 14.7835 16.8932 15.2044 7.00443Z" fill="#FAA422"/>
                      <path d="M31.0938 7.03683L21.0279 7.0162C20.6883 15.5921 19.0228 28.0558 13.9142 44.4179C13.6817 45.1618 14.693 45.6439 15.1035 44.9811C24.2848 30.1573 28.8682 17.1518 31.0938 7.03683Z" fill="#FAA422"/>
                      <path d="M45.7204 7.06689L37.0062 7.04903C35.6252 13.6933 33.1455 22.1219 28.7239 31.7946C28.3082 32.7039 29.462 33.5111 30.1757 32.8116L32.078 30.9462C38.5835 22.4909 42.8883 14.3701 45.7204 7.06689Z" fill="#FAA422"/>
                      <path d="M59.326 11.5314L59.3146 17.1068C57.7433 17.6747 56.1233 18.3098 54.4589 19.0204C53.5148 19.4237 52.6965 18.238 53.4185 17.5075L59.326 11.5314Z" fill="#FAA422"/>
                      <path d="M59.2424 52.7395L59.231 58.2964C59.2262 60.6423 58.8598 62.9029 58.1879 65.0275L12.8727 64.9347C11.816 64.9325 11.5546 63.4611 12.548 63.0977C33.7531 55.3255 49.3521 53.1206 59.2424 52.7395Z" fill="#FAA422"/>
                      <path d="M59.2749 36.8497L59.2543 46.9154C50.6767 47.2205 38.2067 48.8345 21.8237 53.8757C21.0789 54.1054 20.6 53.0919 21.2647 52.6851C36.1269 43.5637 49.1507 39.0336 59.2749 36.8497Z" fill="#FAA422"/>
                      <path d="M59.3042 22.2228L59.2863 30.9374C52.6365 32.2916 44.1975 34.7364 34.5071 39.1182C33.5961 39.5301 32.7937 38.3732 33.496 37.6615L35.3693 35.7676C43.8507 29.2969 51.9896 25.0251 59.3042 22.2228Z" fill="#FAA422"/>
                    </g>
                  </svg>
                  {!institutionLogin && (
                    <h3 className="mb-4.5">{formatMessage(messages['logistration.sign.in'])}</h3>
                  )}
                  <LoginPage institutionLogin={institutionLogin} handleInstitutionLogin={handleInstitutionLogin} />
                </div>
              </div>
              <div className='contact-us-wrapper'>
                <p>Having trouble? <a className="contact-us-link" href="#">Contact us</a></p>
              </div>
            </>
          )
          : (
            <div>
              {institutionLogin
                ? (
                  <Tabs defaultActiveKey="" id="controlled-tab" onSelect={handleInstitutionLogin}>
                    <Tab title={tabTitle} eventKey={selectedPage === LOGIN_PAGE ? LOGIN_PAGE : REGISTER_PAGE} />
                  </Tabs>
                )
                : (!isValidTpaHint() && !hideRegistrationLink && (
                  <Tabs defaultActiveKey={selectedPage} id="controlled-tab" onSelect={(tabKey) => handleOnSelect(tabKey, selectedPage)}>
                    <Tab title={formatMessage(messages['logistration.register'])} eventKey={REGISTER_PAGE} />
                    <Tab title={formatMessage(messages['logistration.sign.in'])} eventKey={LOGIN_PAGE} />
                  </Tabs>
                ))}
              { key && (
                <Navigate to={updatePathWithQueryParams(key)} replace />
              )}
              <div id="main-content" className="main-content">
                {!institutionLogin && !isValidTpaHint() && hideRegistrationLink && (
                  <h3 className="mb-4.5">
                    {formatMessage(messages[selectedPage === LOGIN_PAGE ? 'logistration.sign.in' : 'logistration.register'])}
                  </h3>
                )}
                {selectedPage === LOGIN_PAGE
                  ? <LoginPage institutionLogin={institutionLogin} handleInstitutionLogin={handleInstitutionLogin} />
                  : (
                    <RegistrationPage
                      institutionLogin={institutionLogin}
                      handleInstitutionLogin={handleInstitutionLogin}
                    />
                  )}
              </div>
            </div>
          )}
      </div>
    </BaseContainer>
  );
};

Logistration.propTypes = {
  selectedPage: PropTypes.string,
  backupLoginForm: PropTypes.func.isRequired,
  backupRegistrationForm: PropTypes.func.isRequired,
  clearThirdPartyAuthContextErrorMessage: PropTypes.func.isRequired,
  tpaProviders: PropTypes.shape({
    providers: PropTypes.arrayOf(PropTypes.shape({})),
    secondaryProviders: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

Logistration.defaultProps = {
  tpaProviders: {
    providers: [],
    secondaryProviders: [],
  },
};

Logistration.defaultProps = {
  selectedPage: REGISTER_PAGE,
};

const mapStateToProps = state => ({
  tpaProviders: tpaProvidersSelector(state),
});

export default connect(
  mapStateToProps,
  {
    backupLoginForm,
    backupRegistrationForm,
    clearThirdPartyAuthContextErrorMessage,
  },
)(Logistration);
