import React from "react";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button inline-flex items-center justify-center h-11 ${
    className || ""
  }`;
  const spanClasses = "z-10";
  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a
      href={href}
      className={classes}
    >
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
