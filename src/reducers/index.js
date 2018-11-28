import moveObjects from './moveObjects';
import startGame from './startGame';
import { MOVE_OBJECTS, SHOOT, START_GAME } from '../actions';

import shoot from './shoot';

/**
 * Initial state for game operation
 * @type {{started: boolean, kills: number, lives: number, flyingObjects: Array,
 *       lastObjectCreatedAt: Date, cannonBalls: Array}}
 */
const initialGameState = {
    started: false,
    kills: 0,
    lives: 3,
    flyingObjects: [],
    lastObjectCreatedAt: new Date(),
    cannonBalls: [],
};

/**
 * Full initial state for game
 * @type {{angle: number, gameState: {initialGameState}}}
 */
const initialState = {
    angle: 45,
    gameState: initialGameState,
};

/**
 * Base reducer
 * @param state <object>
 * @param action <string>
 * @return { newGameState } <object>
 */

function reducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        case START_GAME:
            return startGame(state, initialGameState);
        case SHOOT:
            return shoot(state, action);
        default:
            return state;
    }
}

export default reducer;
