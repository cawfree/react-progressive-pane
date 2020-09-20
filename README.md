# react-progressive-pane

<p align="center">
  <img src="./assets/logo.gif" width="554" height="314" alt="react-responsive-pane" />
</p>

## 🚀 Getting Started

Using [**yarn**](https://yarnpkg.com):

```
yarn add react-progressive-pane
```

Using [**npm**](https://npmjs.com):

```
npm i -s react-progressive-pane
```

## ✍️ Example

```javascript
import React, { useCallback } from "react";
import { ProgressivePane } from "react-progressive-pane";

export default () => {
  const renderBackdrop = useCallback(
    () => (
      <div
        style={{
          display: "flex",
          flex: 1,
          backgroundColor: "red",
        }}
      />
    ),
    [],
  );
  const renderContent = useCallback(
    ({ isMobile }) => (
      <div
        style={{
          display: "flex",
          flex: 1,
          backgroundColor: isMobile ? "green" : "red"
        }}
      />
    ),
    [],
  );
  return (
    <ProgressivePane
      renderBackdrop={renderBackdrop}
      renderContent={renderContent}
    />
  );
};
```

## ✌️ License
[**MIT**](./LICENSE)
