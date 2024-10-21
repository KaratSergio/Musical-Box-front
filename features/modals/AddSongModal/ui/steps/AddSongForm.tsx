import { useRef } from 'react';

interface SongUploadProps {
  songFile: File | null;
  setSongFile: (file: File | null) => void;
}

const AddSongForm: React.FC<SongUploadProps> = ({ songFile, setSongFile }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setSongFile(selectedFile);
  };

  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileChange} ref={ref} style={{ display: 'none' }} />
      <button onClick={() => ref.current?.click()}>Upload song</button>
      {songFile && <p>File selected: {songFile.name}</p>}
    </div>
  );
};

export default AddSongForm;
