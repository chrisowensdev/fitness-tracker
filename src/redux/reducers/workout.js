import { ADD_WORKOUT } from '../actionTypes';

const initialState = {
    1001: {
        title: 'Pushups',
        time: {
            minute: '02',
            second: '12',
        },
        reps: '30',
    },
};

const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORKOUT: {
            const id =
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15);
            const { title, minute, second, reps } = action.payload;
            console.log('red title', title);
            return {
                ...state,
                [id]: {
                    title,
                    time: {
                        minute,
                        second,
                    },
                    reps,
                },
            };
        }
        default:
            return state;
    }
};

export default workoutReducer;
