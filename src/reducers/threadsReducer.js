import { v4 as uuidv4 } from 'uuid';
import messagesReducer from './messageReducer'
import moment from 'moment';
 
const initialState = [ // Two threads in state
  {
    id: '1-fca2', // hardcoded pseudo-UUID
    title: 'Buzz Aldrin',
    messages: [
      { // This thread starts with a single message already
        text: 'Twelve minutes to ignition.',
        timestamp: Date.now,
        id: uuidv4(),
      },
    ],
  },
  {
    id: '2-be91',
    title: 'Michael Collins',
    messages: [
      { // This thread starts with a single message already
        text: 'Hi there',
        timestamp: Date.now,
        id: uuidv4(),
      },
    ],
  },
]
function findThreadIndex(threads, action) {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      return threads.findIndex(
        (t) => t.id === action.threadId
      );
    }
    case 'DELETE_MESSAGE': {
      return threads.findIndex(
        (t) => t.messages.find((m) => (
          m.id === action.id
        ))
      );
    }
  }
}


export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
    case 'DELETE_MESSAGE': {
      const threadIndex = findThreadIndex(state, action);
      const oldThread = state[threadIndex];
      const newThread = {
        ...oldThread,
        messages: messagesReducer(oldThread.messages, action),
      };
      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(
          threadIndex + 1, state.length
        ),
      ];
    }
    default: {
      return state;
    }
  }
}