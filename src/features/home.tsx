import '../App.css';

import React from 'react';

import { Authorisation } from './authorisation/Authorisation';
import { SpotifyExample } from './spotifyExample/SpotifyExample';

export function Home() {
  return (
    <>
        <Authorisation />
        <SpotifyExample />
    </>
  );
}

