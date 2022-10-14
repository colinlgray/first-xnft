import React from "react"
import ReactXnft, { Text, View, Iframe } from "react-xnft"
//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
})

export function Tab3() {
  return (
    <View>
      <View
        style={{
          textAlign: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 400,
            margin: "12px",
          }}
        >
          Tab Three
        </Text>
      </View>
      <Iframe src="https://xnft-iframe-test.vercel.app/" />
    </View>
  )
}
