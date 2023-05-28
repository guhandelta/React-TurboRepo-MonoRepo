import React from 'react';
import { AppShell } from "ui";
import { Playlist } from './PlaylistContent';


function App() {
  return (
    <AppShell 
      title="Playlist" 
      colorScheme="dark"
      routes={[
        {
          path: "/",
          element: () => <div>Games Route, coming soon...</div>
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
