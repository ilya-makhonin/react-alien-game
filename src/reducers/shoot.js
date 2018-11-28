import { calculateAngle } from '../utils/formula';

function shoot(state, action) {
    // Don't shot if game not started
    if (!state.gameState.started) return state;

    const { cannonBalls } = state.gameState;

    if (cannonBalls.length === 2) return state;

    const { x, y } = action.mousePosition;

    const angle = calculateAngle(0, 0, x, y);

    const id = (new Date()).getTime();
    const cannonBall = {
        position: { x: 0, y: 0 },
        angle,
        id,
    };

    return {
        ...state,
        gameState: {
            ...state.gameState,
            cannonBalls: [...cannonBalls, cannonBall],
        }
    };
}

export default shoot;