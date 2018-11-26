import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formula';

const FlyingObjectTop = (props) => {
    // Styles for FlyingObjectTop Component [ColorInside, ColorOutside]
    const style = {
        fill: '#b6b6b6',
        stroke: '#7d7d7d',
    };

    const baseWith = 40;
    const halfBase = 20;
    const height = 25;

    /**
     * Form for FlyingObjectTop Component
     * @type {{initialAxis: {x: number, y}, initialControlPoint: {x: number, y: number}
     *       endingControlPoint: {x: number, y: number}, endingAxis: {x: number, y: number}}}
     */
    const cubicBezierCurve = {
        initialAxis: {
            x: props.position.x - halfBase,
            y: props.position.y,
        },
        initialControlPoint: {
            x: 10,
            y: -height,
        },
        endingControlPoint: {
            x: 30,
            y: -height,
        },
        endingAxis: {
            x: baseWith,
            y: 0,
        },
    };

    return (
        <path
            style={style}
            d={pathFromBezierCurve(cubicBezierCurve)}
        />
    );
};

FlyingObjectTop.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
};

export default FlyingObjectTop;
