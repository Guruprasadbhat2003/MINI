import React from 'react';
import { AvatarCreator } from '@readyplayerme/react-avatar-creator';

const config = {
  clearCache: true,
  bodyType: 'fullbody',
  quickStart: false,
  language: 'en',
};

const style = { width: '100%', height: '100vh', border: 'none' };

export default function App() {
  const handleOnAvatarExported = (event) => {
    console.log(`Avatar URL is: ${event.data.url}`);
  };

  return (
    <>
      <AvatarCreator
        subdomain="https://guruprasad-vishnu-bhat.readyplayer.me/avatar"
        config={config}
        style={style}
        onAvatarExported={handleOnAvatarExported}
      />
    </>
  );
}
