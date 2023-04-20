import { ADD_ENTRY } from './types';

export const addEntry = (entry) => {
    return {
        type: ADD_ENTRY,
        payload: entry,
    };
};
