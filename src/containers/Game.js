/**
 * This file - container for App component
 * Connect App component to Redux
 * Using mapStateToProps and mapDispatchToProps functions
 */

import { connect } from 'react-redux';
import App from '../App';
import { moveObjects, startGame, shoot } from '../actions/index';

/**
 *
 * @param state <object> like: {angel: <int>, gameState: <object>}
 * @property gameState type <object> like {started: <bool>, cannonBalls: <arr>, flyingObjects: <arr>,
 *                                         kills: <int>, lives: <int>, lastObjectCreatedAt: <data_time> (unique)}
 */
const mapStateToProps = state => ({
    angle: state.angle,
    gameState: state.gameState,
});

const mapDispatchToProps = dispatch => ({
    moveObjects: (mousePosition) => {
        dispatch(moveObjects(mousePosition));
    },
    startGame: () => {
        dispatch(startGame());
    },
    shoot: (mousePosition) => {
        dispatch(shoot(mousePosition))
    },
});

const Game = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Game;