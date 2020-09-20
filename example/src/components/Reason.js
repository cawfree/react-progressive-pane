import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

import { Pane, Heading, TickCircleIcon, Paragraph } from "evergreen-ui";

const styles = StyleSheet.create({
  separator: { height: "0.25em" },
  emoji: { fontSize: "1.2em", marginTop: "-0.2em" },
});

function Reason({ title, description, icon, iconColor, emoji }) {
  return (
    <Pane paddingLeft="0.5em" paddingRight="0.5em">
      <Pane display="flex" flexDirection="row">
        <Pane display="flex" justifyContent="center">
          {!!emoji ? (
            <Pane
              display="flex"
              marginRight={15}
            >
              <span
                className={css(styles.emoji)}
                children={emoji}
              />
            </Pane>
          ) : (
            <TickCircleIcon
              marginTop="0.2em"
              display="flex"
              marginRight={15}
              color={iconColor}
            />
          )}
        </Pane>
        <Pane display="flex" flexDirection="column">
          <Heading size={500} children={title} />
          <Pane className={css(styles.separator)} />
          <Paragraph children={description} />
        </Pane>
      </Pane>
    </Pane>
  );
}

Reason.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
};

Reason.defaultProps = {
  iconColor: "success",
};

export default Reason;
