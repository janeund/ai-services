import React from "react";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button inline-flex items-center justify-center h-11 hover:text-violet-500 transition-colors ${
    className || ""
  }`;
  const spanClasses = "z-10 w-full rounded p-[0.77rem] bg-gray-900";
  const renderButton = () => (
    <button
      className={classes}
      onClick={onClick}
    >
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
