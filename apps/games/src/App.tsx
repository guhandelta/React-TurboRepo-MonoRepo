import React from "react";
import { AppShell } from "ui";
import { GamesContent } from "games-content";

function App() {
  return (
    <AppShell 
      title="Games" 
      colorScheme="dark"
      routes={[
        {
          element: GamesContent,
          path: "/"
        },
        {
          element: () => <div style={{ textAlign: "center" }}>
                              <br/><br/><br/><br/><br/>
                              <b>Checkout the Playlist!!!</b>
                          </div>,
          path: "/playlist"
        },
      ]}
      navLinks={[
        {
          label: "Home",
          path: "/"
        },
        {
          label: "Playlist",
          path: "/playlist"
        },
      ]}
    />
  );
}

export default App;
