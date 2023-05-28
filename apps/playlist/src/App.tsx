import React from 'react';

import { AppShell } from "ui";
import { GamesContent } from "games-content";

import { Playlist } from './PlaylistContent';


function App() {
  return (
    <AppShell 
      title="Playlist" 
      colorScheme="dark"
      routes={[
        {
          path: "/",
          element: GamesContent
        },
        {
          path: "/playlist",
          element: Playlist
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
