import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { NavBar, Svg, Icon, IconButton, Dropdown } from '../';

function Header({
  children,
  menuOptions,
  isReturnEnabled,
  onClickReturnButton,
  isSticky,
  WhiteLabeling,
}) {
  const { t } = useTranslation('Header');

  // TODO: this should be passed in as a prop instead and the react-router-dom
  // dependency should be dropped
  const onClickReturn = () => {
    if (isReturnEnabled && onClickReturnButton) {
      onClickReturnButton();
    }
  };

  const CustomLogo = React => {
    return WhiteLabeling.createLogoComponentFn(React);
  };

  return (
    <NavBar
      className="justify-between border-b-4 border-black"
      isSticky={isSticky}
    >
      <div className="flex justify-start items-center flex-1">
        {/* <div className="flex items-center">
          <div
            className={classNames("inline-flex items-center mr-3", isReturnEnabled && 'cursor-pointer')}
            onClick={onClickReturn}
          >
            {isReturnEnabled && <Icon name="chevron-left" className="w-8 text-primary-active" />}
            <div className="ml-4">{WhiteLabeling ? CustomLogo(React) : <Svg name="logo-ohif" />}</div>
          </div>
        </div> */}
        {/* <img src="/static/eclarity.jpeg"></img> */}
        <a href="/">
          {' '}
          <h1 style={{ color: '#fff' }}>Eclarity Health</h1>
        </a>

        <div className="flex items-center">{children}</div>
        {/* <div className="flex items-center">
          <span className="mr-3 text-lg text-common-light">
            {t('INVESTIGATIONAL USE ONLY')}
          </span>
          <Dropdown id="options" showDropdownIcon={false} list={menuOptions}>
            <IconButton
              id={"options-settings-icon"}
              variant="text"
              color="inherit"
              size="initial"
              className="text-primary-active"
            >
              <Icon name="settings" />
            </IconButton>
            <IconButton
              id={"options-chevron-down-icon"}
              variant="text"
              color="inherit"
              size="initial"
              className="text-primary-active"
            >
              <Icon name="chevron-down" />
            </IconButton>
          </Dropdown>
        </div> */}
      </div>
    </NavBar>
  );
}

Header.propTypes = {
  menuOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string,
      onClick: PropTypes.func.isRequired,
    })
  ),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  isReturnEnabled: PropTypes.bool,
  isSticky: PropTypes.bool,
  onClickReturnButton: PropTypes.func,
  WhiteLabeling: PropTypes.element,
};

Header.defaultProps = {
  isReturnEnabled: true,
  isSticky: false,
};

export default Header;
