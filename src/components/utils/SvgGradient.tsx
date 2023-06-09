// React imports
import React from 'react';

// Libraries imports
import ColorHash from 'color-hash';

const colorHash = new ColorHash({ saturation: 1.0 });

const stringToColour = (s: string): string => colorHash.hex(s);

const generateColours = (s: string): [string, string] => {
  const s1 = s.substring(0, s.length / 2);
  const s2 = s.substring(s.length / 2);
  const c1 = stringToColour(s1);
  const c2 = stringToColour(s2);

  return [c1, c2];
};

const SvgGradient = ({ s, size = 256 }: { s: string, size?: number }): React.ReactElement => {
  const [c1, c2] = generateColours(s);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill="url(#gradient)" />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2={size} y2={size} gradientUnits="userSpaceOnUse">
          <stop stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
      </defs>
    </svg>
  )
};

export default SvgGradient;