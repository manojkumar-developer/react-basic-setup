/*

Button

*/
/** ****************************** Import packages *************************** */
import React from "react";
import PropTypes from "prop-types";

const IconImage = ({ icon }) => (
  <img src={`image/icons/${icon}.svg`} width="15" height="14" alt="" />
);

IconImage.defaultProps = {
  icon: ""
};

IconImage.propTypes = {
  icon: PropTypes.string
};

const Title = ({ title }) => <span className="btn-text">{title}</span>;

Title.defaultProps = {
  title: ""
};

Title.propTypes = {
  title: PropTypes.string
};

const Button = function({ type, title, icon, btnClass, disabled, onClick }) {
  const handleOnClick = e => {
    e.stopPropagation();
    e.preventDefault();
    onClick();
  };

  return (
    <button
      type={type || "button"}
      disabled={disabled || false}
      className={`btn ${btnClass}`}
      onClick={onClick ? handleOnClick : () => {}}
    >
      {icon ? <IconImage icon={icon} /> : ""}
      {title ? <Title title={title} /> : ""}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  title: "",
  icon: "",
  btnClass: "",
  disabled: false,
  onClick: () => {}
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  btnClass: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
