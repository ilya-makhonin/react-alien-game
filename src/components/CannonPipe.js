import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formula';

const CannonPipe = (props) => {
    // Styles for CannonPipe Component [ColorInside, ColorOutside, WidthOutsideLine]
    const cannonPipeStyle = {
        fill: '#999',
        stroke: '#666',
        strokeWidth: '2px',
    };

    /**
     * CSS Transform function
     * @param props.rotation - degree of rotation
     * @type {string}
     */
    const transform = `rotate(${props.rotation}, 0, 0)`;

    const muzzleWidth = 40;
    const halfMuzzle = 20;
    const height = 100;
    const yBasis = 70;

    /**
     * Constants for create the form CannonPipe Component
     * @type {{initialAxis: {x: number, y: number}, initialControlPoint: {x: number, y: number}
     *        endingControlPoint: {x: number, y: number}, endingAxis: {x: number, y: number}}}
     */
    const cubicBezierCurve = {
        initialAxis: {
            x: -halfMuzzle,
            y: -yBasis,
        },
        initialControlPoint: {
            x: -40,
            y: height * 1.7,
        },
        endingControlPoint: {
            x: 80,
            y: height * 1.7,
        },
        endingAxis: {
            x: muzzleWidth,
            y: 0,
        },
    };

    return (
        // Create CannonPipe Component
        <g transform={transform}>
            <path
                style={cannonPipeStyle}
                d={pathFromBezierCurve(cubicBezierCurve)}
            />
            <line
                x1={-halfMuzzle}
                y1={-yBasis}
                x2={halfMuzzle}
                y2={-yBasis}
                style={cannonPipeStyle}
            />
        </g>
    );
};

CannonPipe.propTypes = {
    rotation: PropTypes.number.isRequired,
};

export default CannonPipe;