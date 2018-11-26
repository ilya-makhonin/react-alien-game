import React from 'react';
import PropTypes from 'prop-types';

const CannonBall = (props) => {
    //Styles for the ball [ColorInside, ColorOutside, WidthOutsideLine]
    const ballStyle = {
        fill: '#777',
        stroke: '#444',
        strokeWidth: '2px',
    };

    return (
        /**
         * Create ellipse element. It's like a ball
         * @param props.position.x and props.position.y - position ball on game area
         */
        <ellipse
            style={ballStyle}
            cx={props.position.x}
            cy={props.position.y}
            rx="16"
            ry="16"
        />
    );
};

CannonBall.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
};

export default CannonBall;