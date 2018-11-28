export default (state, initialGameState) => {
    // Switched property "started". Starting game
    return {
        ...state,
        gameState: {
            ...initialGameState,
            started: true,
        }
    }
};
