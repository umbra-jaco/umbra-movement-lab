// GridOverlay.jsx
import React from 'react';

const GridOverlay = () => {
    return (
        <div
            className="fixed inset-0 z-0 pointer-events-none opacity-20"
            style={{
                backgroundImage: `
          linear-gradient(to right, #450a0a 1px, transparent 1px),
          linear-gradient(to bottom, #450a0a 1px, transparent 1px)
        `,
                backgroundSize: '4rem 4rem' // Adjust this value to change the grid density
            }}
        >
            {/* Subtle noise texture overlay for a more raw, brutalist feel */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxmaWx0ZXIgaWQ9J24nPjxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjcnIG51bU9jdGF2ZXM9JzMnIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHk9JzAuMDUnLz48L3N2Zz4=')] opacity-30"></div>
        </div>
    );
};

export default GridOverlay;