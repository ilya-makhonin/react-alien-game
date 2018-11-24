import React from 'react';
import { skyAndGroundWidth, gameHeight } from './../utils/constants';

const Sky = () => {
    // Background color for Sky Component
    const skyStyle = {
        fill: '#30abef',
    };

    return (
        // Create a rectangular area (sky for the game)
        <rect
            style={skyStyle}
            x={skyAndGroundWidth / -2}
            y={100 - gameHeight}
            width={skyAndGroundWidth}
            height={gameHeight}
        />
    );
};

export default Sky;