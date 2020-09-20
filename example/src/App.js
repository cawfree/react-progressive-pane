import React, { useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import ShadertoyReact from 'shadertoy-react';

import { ProgressivePane } from "./lib";

function App() {
  const renderBackdrop = useCallback(
    () => (
      <ShadertoyReact
        fs={`
void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
  vec2 uv = fragCoord.xy/iResolution.xy;
  vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
  fragColor = vec4(col,1.0);
}
          `.trim()}
      />
    ),
    [],
  );
  const renderContent = useCallback(
    () => (
      <div
        style={{
          flex: 1,
          backgroundColor: "white",
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
}

export default App;
