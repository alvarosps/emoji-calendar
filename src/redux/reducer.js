import { ADD_ENTRY } from './types';

const initialState = {
    entries: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ENTRY:
            return { ...state, entries: [...state.entries, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;
