import React from 'react';

interface SongProgressProps {
  left: number;
  right: number;
  onChange: () => void;
}

const SongProgress: React.FC<SongProgressProps> = ({ left, right, onChange }) => {
  return (
    <div className="flex">
      <input type="range" min={left} max={right} value={left} onChange={onChange} />
      <div>
        {left}/{right}
      </div>
    </div>
  );
};

export default SongProgress;
