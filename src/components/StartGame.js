import React from 'react';
import PropTypes from 'prop-types';
import { gameWidth } from '../utils/constants';

const StartGame = (props) => {
    /**
     * StartGame Component configuration
     * @type {{x: number, y: number, width, height: number, rx: number
     *       ry: number, style: {fill: string, cursor: string}, onClick}}
     */
    const buttonConfig = {
        x: gameWidth / -2,
        y: -280,
        width: gameWidth,
        height: 200,
        rx: 10,
        ry: 10,
        style: {
            fill: 'transparent',
            cursor: 'pointer',
        },
        onClick: props.onClick,
    };

    /**
     * Configuration for a text
     * @type {{textAnchor: string, x: number, y: number,
     *       style: {fontFamily: string, fontSize: number, fill: string, cursor: string}, onClick: function}}
     */
    const textConfig = {
        textAnchor: 'middle',
        x: 0,
        y: -150,
        style: {
            fontFamily: '"Joti One", cursive',
            fontSize: 60,
            fill: '#e3e3e3',
            cursor: 'pointer',
        },
        onClick: props.onClick,
    };

    return (
        // Create StartGame Component
        <g filter="url(#shadow)">
            <rect {...buttonConfig} />
            <text {...textConfig}>
                Tap To Start!
            </text>
        </g>
    );
};

StartGame.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default StartGame;