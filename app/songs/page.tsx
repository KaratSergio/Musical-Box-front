'use client';

import { useState } from 'react';
import SongList from '@/entities/songs/ui/SongList';
import Player from '@/shared/ui/player/Player';
import songs from '@/data';
import { ISong } from '@/entities/songs/model/types';

const SongsPage = () => {
  const [activeSong, setActiveSong] = useState<ISong | null>(null);

  return (
    <div className="flex items-center justify-center">
      <SongList songs={songs} onSongSelect={setActiveSong} />
      {activeSong && <Player song={activeSong} />}
    </div>
  );
};

export default SongsPage;
