import { v4 as uuidv4 } from 'uuid';

export default function(state , action) {
    switch (action.type) {
        case 'ADD_MESSAGE': {
        const newMessage = {
        text: action.text,
        timestamp: Date.now(),
        id: uuidv4(),
        };
        return state.concat(newMessage);
        }
        case 'DELETE_MESSAGE': {
        return state.filter(m => m.id !== action.id);
        }
        default: {
        return state;
        }
        }
    }