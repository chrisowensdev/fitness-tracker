import { ADD_WORKOUT } from './actionTypes';

export const addWorkout = (title, minute, second, reps) => ({
    type: ADD_WORKOUT,
    payload: {
        title,
        time: {
            minute,
            second,
        },
        reps,
    },
});
