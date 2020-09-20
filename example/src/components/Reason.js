import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

import { Pane, Heading, TickCircleIcon, Paragraph } from "evergreen-ui";

const styles = StyleSheet.create({
  separator: { height: "0.25em" },
});

function Reason({ title, description, icon }) {
  return (
    <Pane paddingLeft="0.5em" paddingRight="0.5em">
      <Pane display="flex" flexDirection="row">
        <Pane display="flex" paddingTop="0.3em" justifyContent="center">
          <TickCircleIcon display="flex" color="#7CC5F7" marginRight={15} />
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
};

export default Reason;
