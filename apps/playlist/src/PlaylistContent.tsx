/*Exposing anything directly from a library may bring in any security vulnerabilities like

Source code vulnerabilities.
Input validation.
Reliance on client-side validation.
Unintended script execution.
Session data exposure.
Unintentional user activity

So it is exposed indirectly, from a separate file */
import React from 'react'
import { Playlist } from 'playlist-content'
export default Playlist

