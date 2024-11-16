import React from 'react';

interface SongProgressProps {
  left: number;
  right: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SongProgress: React.FC<SongProgressProps> = ({ left, right, onChange }) => {
  return (
    <div className="flex">
      <input type="range" min={0} max={right} value={left} onChange={onChange} />
      <div>
        {left}/{right}
      </div>
    </div>
  );
};

export default SongProgress;
