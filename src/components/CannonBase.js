import React from 'react';
import { pathFromBezierCurve } from '../utils/formula';

const CannonBase = (props) => {
    // Styles for CannonBase Component [ColorInside, ColorOutside, WidthOutsideLine]
    const cannonBaseStyle = {
        fill: '#a16012',
        stroke: '#75450e',
        strokeWidth: '2px',
    };

    /**
     * Dimensions CannonBase Component
     * @param baseWith, halfBase, height, negativeHeight
     * @type {number}
     */
    const baseWith = 80;
    const halfBase = 40;
    const height = 60;
    const negativeHeight = height * -1;

    /**
     * Constants for create the form CannonBase Component
     * @type {{initialAxis: {x: number, y: number}, initialControlPoint: {x: number, y: number}
     *        endingControlPoint: {x: number, y: number}, endingAxis: {x: number, y: number}}}
     */
    const cubicBezierCurve = {
        initialAxis: {
            x: -halfBase,
            y: height,
        },
        initialControlPoint: {
            x: 20,
            y: negativeHeight,
        },
        endingControlPoint: {
            x: 60,
            y: negativeHeight,
        },
        endingAxis: {
            x: baseWith,
            y: 0,
        },
    };

    return (
        // Create the figure
        <g>
            <path
                style={cannonBaseStyle}
                d={pathFromBezierCurve(cubicBezierCurve)}
            />
            <line
                x1={-halfBase}
                y1={height}
                x2={halfBase}
                y2={height}
                style={cannonBaseStyle}
            />
        </g>
    );
};

export default CannonBase;