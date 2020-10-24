import { ADD_WORKOUT } from '../actionTypes';

const initialState = {
    title: '',
    time: {
        minute: '',
        second: '',
    },
    reps: '',
};

const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORKOUT: {
            const { title, minute, second, reps } = action.payload;
            return {
                ...state,
                title,
                time: {
                    minute,
                    second,
                },
                reps,
            };
        }
        default:
            return state;
    }
};

export default workoutReducer;
