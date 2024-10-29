import SongList from '@/entities/songs/ui/SongList';
import songs from '@/data';

export default function SongsPage() {
  return (
    <div className="flex items-center justify-center">
      <SongList songs={songs} />
    </div>
  );
}
