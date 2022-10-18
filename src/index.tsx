// index.tsx
import React from "react";
import ReactXnft, { AnchorDom, View, Text } from "react-xnft";
// import { App } from './app'

const App = () => {
  return (
    <View>
      <Text style={{ color: "blue" }}>Hello, World!</Text>
    </View>
  );
};

ReactXnft.render(
  <AnchorDom>
    <App />
  </AnchorDom>
);
