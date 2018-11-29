import {
    createInterval, flyingObjectsStarterYAxis, maxFlyingObjects,
    flyingObjectsStarterPositions
} from '../utils/constants';

export default (state) => {
    if ( ! state.gameState.started) return state; // Game don't started

    // Create a new flying object
    const now = (new Date()).getTime();
    const { lastObjectCreatedAt, flyingObjects } = state.gameState;
    const createNewObject = (
        now - (lastObjectCreatedAt).getTime() > createInterval &&   // Compare the date of creation of the last object
        flyingObjects.length < maxFlyingObjects   // Is the limit exceeded
    );

    if ( ! createNewObject) return state; // Don't need create new object now

    // Creating a new flying object
    const id = (new Date()).getTime();
    // Position to create a new flying object
    const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);
    const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];
    // New flying object
    const newFlyingObject = {
        position: {
            x: flyingObjectPosition,
            y: flyingObjectsStarterYAxis,
        },
        createdAt: (new Date()).getTime(),
        id,
    };

    return {
        ...state,
        gameState: {
            ...state.gameState,
            flyingObjects: [
                ...state.gameState.flyingObjects,
                newFlyingObject
            ],
            lastObjectCreatedAt: new Date(),
        }
    }
};
