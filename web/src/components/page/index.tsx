import React, { FC } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./index.module.less";

const Page: FC<{ children: JSX.Element; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={cx(className, styles.contentInner)}>{children}</div>;
};

Page.propTypes = {};

export default Page;
