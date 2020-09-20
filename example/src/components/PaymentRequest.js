import React from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import { Pane, Heading, Button, Paragraph, Small } from "evergreen-ui";
import { StyleSheet, css } from "aphrodite";

import Coin from "../assets/lottie/coin.json";

import { Reason } from ".";

const styles = StyleSheet.create({
  centerText: { textAlign: "center" },
  separator: { height: "0.5em" },
});

function PaymentRequest({ isMobile }) {
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
        height="10em"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: Coin,
            rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
          }}
          height="15em"
          width="15em"
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
            children="You're about to make a contribution!"
          />
        </Pane>
      </Pane>
      <Pane className={css(styles.separator)} />
      <Pane className={css(styles.separator)} />
      <Reason
        title="Your payment is secure."
        description="We use Apple Pay to accept payments, meaning that you get full transparency  and don't need to share any sensitive information."
        emoji="🔒"
      />
      <Pane className={css(styles.separator)} />
      <Pane className={css(styles.separator)} />
      <Reason
        emoji="⚡"
        title="Your contribution is immediate!"
        description="100% of the donation you make will go directly to the iniative. This will help the admins take action fast!"
      />
      <Pane
        flexDirection="column"
        display="flex"
        flex={1}
        justifyContent="flex-end"
      >
        <Paragraph className={css(styles.centerText)}>
          <Small
            children={"All payments are processed using Wyre."}
          />
        </Paragraph>
        <Pane className={css(styles.separator)} />
        <Button
          onClick={() => alert('Contribute')}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={56}
          appearance="primary"
          children="Contribute via Apple Pay"
        />
        <Pane className={css(styles.separator)} />
        <Button
          onClick={() => alert('Cancel')}
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

PaymentRequest.propTypes = {
  isMobile: PropTypes.bool,
};

PaymentRequest.defaultProps = {
  isMobile: false,
};

export default PaymentRequest;
