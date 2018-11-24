import React from 'react';
import { skyAndGroundWidth } from './../utils/constants';

const Ground = () => {
    // Background color for Ground Component
    const groundStyle = {
        fill: '#59a941',
    };

    // Styles for a line
    const division = {
        stroke: '#458232',
        strokeWidth: '3px',
    };

    return (
        /**
         * Create rectangular area <rect> - ground for the Game
         * Create line <line> for separation sky and ground
         */
        <g id="ground">
            <rect
                id="ground-2"
                data-name="ground"
                style={groundStyle}
                x={skyAndGroundWidth / -2}
                y={0}
                width={skyAndGroundWidth}
                height={100}
            />
            <line
                x1={skyAndGroundWidth / -2}
                y1={0}
                x2={skyAndGroundWidth / 2}
                y2={0}
                style={division}
            />
        </g>
    );
};

export default Ground;