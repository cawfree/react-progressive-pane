import React from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import { Pane, Heading, Button, Paragraph, Small } from "evergreen-ui";
import { StyleSheet, css } from "aphrodite";

import Twitter from "../assets/lottie/twitter.json";

import { Reason } from ".";

const styles = StyleSheet.create({
  centerText: { textAlign: "center" },
  separator: { height: "0.5em" },
});

function TwitterAuth({ isMobile }) {
  return (
    <Pane
        display="flex"
        flex={1}
        backgroundColor="white"
        paddingLeft={10}
        paddingRight={10}
        paddingTop={10}
        paddingBottom={15}
        justifyContent="center"
        flexDirection="column"
      >
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: Twitter,
              rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
            }}
            height="8em"
            width="8em"
          />
        </Pane>
        <Pane
          display="flex"
          padding={16}
          borderRadius={3}
        >
          <Pane flex={1} alignItems="center" display="flex">
            <Heading
              className={css(styles.centerText)}
              color="black"
              size={600}
              children="Uni uses Twitter to securely link your account."
            />
          </Pane>
        </Pane>
        <Pane className={css(styles.separator)} />
        <Pane className={css(styles.separator)} />
        <Reason
          title="Because it's transparent."
          description="We just need to prove that you are you. We don't need any special permissions to give you a wallet."
        />
        <Pane className={css(styles.separator)} />
        <Pane className={css(styles.separator)} />
        <Reason
          title="And decentralized."
          description="All of your funds are managed by the Ethereum blockchain. This means the only person in control is you."
        />
        <Pane
          flexDirection="column"
          display="flex"
          flex={1}
          justifyContent="flex-end"
        >
          <Paragraph className={css(styles.centerText)}>
            <Small
              children={`By ${isMobile ? "tapping" : "clicking"} continue, you agree to be courteous and respectful to other users.`}
            />
          </Paragraph>
          <Pane className={css(styles.separator)} />
          <Button
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={56}
            appearance="primary"
            children="Continue"
          />
          <Pane className={css(styles.separator)} />
          <Button
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={56}
            children="Cancel"
          />
        </Pane>
      </Pane>
  );
}

TwitterAuth.propTypes = {
  isMobile: PropTypes.bool,
};

TwitterAuth.defaultProps = {
  isMobile: false,
};

export default TwitterAuth;
