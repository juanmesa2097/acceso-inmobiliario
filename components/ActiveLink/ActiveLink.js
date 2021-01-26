import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";

const ActiveLink = ({ href, children, activeClassName }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} ${activeClassName}`.trim();
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};

export default ActiveLink;
