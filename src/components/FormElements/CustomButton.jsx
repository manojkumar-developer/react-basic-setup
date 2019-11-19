/*

CustomButton

*/
/** ****************************** Import packages *************************** */
import React from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';

const IconImage = ({ icon }) => (
  <img className="mr-2" src={`image/icons/${icon}.svg`} width="15" height="14" alt="" />
);

IconImage.defaultProps = {
  icon: ""
};

IconImage.propTypes = {
  icon: PropTypes.string
};

const Title = ({ title }) => <span className="btn-text">{title}</span>;

const CustomButton = function({ color, variant, size, type, title, icon, btnClass, disabled, onClick }) {
  const handleOnClick = e => {
    e.stopPropagation();
    e.preventDefault();
    onClick();
  };

  return (
    <Button
      color={color || "primary"}
      variant={variant || "contained"}
      size={size || "small"}
      type={type || "button"}
      disabled={disabled || false}
      className={`btn text-inherit ${btnClass}`}
      onClick={onClick ? handleOnClick : () => {}}
    >
      {icon ? <IconImage icon={icon} /> : ""}
      {title ? <Title title={title} /> : ""}
    </Button>
  );
};

CustomButton.defaultProps = {  
  color: "",
  variant:"",
  size:"",
  type: "button",
  title: "",
  icon: "",
  btnClass: "",
  disabled: false,
  onClick: () => {}
};

CustomButton.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  btnClass: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default CustomButton;