import React from "react";

import { AppShell } from "ui";
import { GamesContent } from "games-content";
import { Playlist } from "playlist-content";

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
          element: Playlist,
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
