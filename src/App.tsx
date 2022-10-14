import ReactXnft, { View, Tab, Text } from "react-xnft"
import React from "react"

import { Tab1 } from "./Tab1"
import { Tab2 } from "./Tab2"
import { Tab3 } from "./Tab3"

// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
})

export function App() {
  return (
    <View style={{ height: "100%", backgroundColor: "#111827" }}>
      <Tab.Navigator
        options={({ route }) => {
          return {
            tabBarIcon: () => {
              if (route.name === "tab1") {
                return <Text>Tab One</Text>
              } else if (route.name === "tab2") {
                return <Text>Tab Two</Text>
              } else {
                return <Text>Tab Three</Text>
              }
            },
          }
        }}
      >
        <Tab.Screen name="tab1" component={() => <Tab1 />} />
        <Tab.Screen name="tab2" component={() => <Tab2 />} />
        <Tab.Screen name="tab3" component={() => <Tab3 />} />
      </Tab.Navigator>
    </View>
  )
}
