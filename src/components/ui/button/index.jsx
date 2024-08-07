import React from "react";
import PropTypes from "prop-types";

const Button = ({
  width,
  border,
  backgroundColor,
  textColor,
  borderRadius,
  onClick,
  children,
  padding,
  className,
  cursor,
  type,
}) => {
  const buttonStyle = {
    width,
    border,
    backgroundColor,
    color: textColor,
    borderRadius,
    padding,
    cursor,
  };

  return (
    <button
      style={buttonStyle}
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  border: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  padding: PropTypes.string,
};

Button.defaultProps = {
  border: "1px solid #4361EE",
  backgroundColor: "#1A2690",
  textColor: "#ffffff",
  borderRadius: "6px",
  height: "100%",
  padding: '6px 20px',
  width: "",
};

export default Button;
