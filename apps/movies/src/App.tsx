import React from 'react';
import { AppShell } from "ui";

function App() {
  return (
    <AppShell 
      title="Movies" 
      colorScheme="light"
      routes={[
        {
          element: () => <div style={{ textAlign: "center" }}>
                              <br/><br/><br/><br/><br/>
                              <b>Really this is the Homepage!!!</b>
                          </div>,
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
