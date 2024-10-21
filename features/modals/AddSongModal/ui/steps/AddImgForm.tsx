import { useRef } from 'react';

interface ImageUploadProps {
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
}

const AddImgForm: React.FC<ImageUploadProps> = ({ imageFile, setImageFile }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setImageFile(selectedFile);
  };

  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} ref={ref} />
      <button onClick={() => ref.current?.click()}>Upload image</button>
      {imageFile && <p>File selected: {imageFile.name}</p>}
    </div>
  );
};

export default AddImgForm;
