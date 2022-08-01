import React from 'react';
import PropTypes from 'prop-types';
//import './skbutton.css';
import { HiOutlineCheck } from 'react-icons/hi'; //https://react-icons.github.io/react-icons/icons?name=hi

/**
 * Primary UI component for user interaction
 */
export const SKButton = ({
  basic,
  size,
  color,
  variant,
  shape,
  width,
  label,
  type,
  ...props
}) => {
  const mode = basic;
  return (
    <button
      type="button"
      className={[
        'btn',
        `${size}`,
        `color-${color}`,
        `${variant}`,
        `${shape}`,
        `${width}`,
        `${type}`,
        mode,
      ].join(' ')}
      {...props}
    >
      <i className="icon icon-before">
        <HiOutlineCheck />
      </i>
      <span className="text">{label}</span>
      <i className="icon icon-after">
        <HiOutlineCheck />
      </i>
    </button> /* disabled : disabled={false}처리해도 될듯 */
  );
};

SKButton.propTypes = {
  //basic: PropTypes.bool,
  /* 사이즈(높이) */
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  /* 컬러 */
  color: PropTypes.oneOf(['basic', 'primary', 'secondary', 'normal']),
  /* 버튼 타입 */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  /* 라운드 유무 */
  shape: PropTypes.oneOf(['flat', 'rounded', 'floating']), // floating용은 btn-icon-floating타입일 때 사용
  /* 사이즈(넓이) */
  width: PropTypes.oneOf(['auto', 'full']),
  type: PropTypes.oneOf(['', 'icon-text', 'icon']),
  /* Button contents */
  label: PropTypes.string.isRequired,
  /* Optional click handler */
  onClick: PropTypes.func,
};

SKButton.defaultProps = {
  size: 'medium',
  color: 'primary',
  variant: 'contained',
  shape: 'flat',
  width: 'auto',
  type: '',
  onClick: undefined,
};
