import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formula';

const Heart = (props) => {
    /**
     * Styles for this Components
     * @type {{fill: string, stroke: string, strokeWidth: string}}
     */
    const heartStyle = {
        fill: '#da0d15',
        stroke: '#a51708',
        strokeWidth: '2px',
    };

    /**
     * In this case, Component consists of two "halves"
     * @const leftSide and rightSide
     * @type {{initialAxis: {x, y}, initialControlPoint: {x: number, y: number}
     *       endingControlPoint: {x: number, y: number}, endingAxis: {x: number, y: number}}}
     */
    const leftSide = {
        initialAxis: {
            x: props.position.x,
            y: props.position.y,
        },
        initialControlPoint: {
            x: -20,
            y: -20,
        },
        endingControlPoint: {
            x: -40,
            y: 10,
        },
        endingAxis: {
            x: 0,
            y: 40,
        },
    };

    const rightSide = {
        initialAxis: {
            x: props.position.x,
            y: props.position.y,
        },
        initialControlPoint: {
            x: 20,
            y: -20,
        },
        endingControlPoint: {
            x: 40,
            y: 10,
        },
        endingAxis: {
            x: 0,
            y: 40,
        },
    };

    return (
        // Create Heart Component
        <g filter="url(#shadow)">
            <path
                style={heartStyle}
                d={pathFromBezierCurve(leftSide)}
            />
            <path
                style={heartStyle}
                d={pathFromBezierCurve(rightSide)}
            />
        </g>
    );
};

Heart.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
};

export default Heart;