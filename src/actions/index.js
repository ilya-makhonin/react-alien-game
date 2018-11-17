export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const START_GAME = 'START_GAME';
export const SHOOT = 'SHOOT';

/**
 * @param mousePosition: type <object> like { x: <float>, y: <float> }
 */

export const moveObjects = mousePosition => ({
    type: MOVE_OBJECTS,
    mousePosition,
});


export const startGame = () => ({
    type: START_GAME,
});

export const shoot = (mousePosition) => ({
    type: SHOOT,
    mousePosition,
});