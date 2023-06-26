import React from 'react';

import { AppShell } from "ui";
//@ts-ignore

import { Playlist } from 'playlist-content';
import { GamesContent } from 'games-content';


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
