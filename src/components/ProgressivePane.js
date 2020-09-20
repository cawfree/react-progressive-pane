import React from "react";
import PropTypes from "prop-types";
import { typeCheck } from "type-check";
import { StyleSheet, css } from "aphrodite";
import { isMobile as isMobileDetected } from "react-device-detect";
import { useWindowSize } from "react-use";

const styles = StyleSheet.create({
  backdrop: {
    pointerEvents: "box-none",
    display: "flex",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    pointerEvents: "box-none",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    overflow: "hidden",
  },
});

function ProgressivePane({ renderBackdrop, renderContent, ...extraProps }) {
  if (!typeCheck("Function", renderBackdrop)) {
    throw new Error(`Expected Function renderBackdrop, encountered ${renderBackdrop}.`);
  } else if (!typeCheck("Function", renderContent)) {
    throw new Error(`Expected Function renderContent, encountered ${renderContent}.`);
  }

  const { width, height } = useWindowSize();
  const isMobile = isMobileDetected || (width < height * 0.5);

  const contentProps = isMobile ? {
   className: css(styles.fill),
  } : {
    style: {
      display: "flex",
      width: height * 0.9 * 0.5,
      height: height * 0.9,
      borderRadius: 15,
      overflow: "hidden",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      pointerEvents: "box-none",
    },
  };

  return (
    <div className={css(styles.backdrop)}>
      <div className={css(styles.fill)} style={{ zIndex: -1 }}>
        {renderBackdrop({ isMobile })}
      </div>
      <div {...contentProps}>
        {renderContent({ isMobile })}
      </div>
    </div>
  );
}

ProgressivePane.propTypes = {
  renderBackdrop: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
};

ProgressivePane.defaultProps = {};

export default ProgressivePane;
