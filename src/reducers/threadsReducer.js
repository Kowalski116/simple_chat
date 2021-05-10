import { v4 as uuidv4 } from 'uuid';
import messagesReducer from './messageReducer'
import moment from 'moment';
 
const initialState = [ // Two threads in state
  {
    threadId: '1-fca2', // hardcoded pseudo-UUID
    activeUserId:'1',
    users: [{
      id: '1',
      name: 'Buzz Aldrin',
      messages: [{ // This thread starts with a single message already
        text: 'Twelve minutes to ignition.',
        timestamp: Date.now(),
        id: uuidv4(),
      },]
    },
    {
      id: '2',
      name: 'Michael Collins',
      messages: [{ // This thread starts with a single message already
        text: 'I am Michael Collins',
        timestamp: Date.now(),
        id: uuidv4(),
      },
      { // This thread starts with a single message already
        text: 'I am Mi',
        timestamp: Date.now(),
        id: uuidv4(),
      }]
    }]
  },
  // {
  //   id: '2-be91',
  //   title: 'Michael Collins',
  //   messages: [
  //     { // This thread starts with a single message already
  //       text: 'Hi there',
  //       timestamp: Date.now()-200000,
  //       id: uuidv4(),
  //     },
  //     { // This thread starts with a single message already
  //       text: 'How are you',
  //       timestamp: Date.now()-300000,
  //       id: uuidv4(),
  //     },
  //   ],
  // },
]
function findThreadIndex(threads, action) {
  switch (action.type) {
    case 'ADD_MESSAGE': 
    case 'OPEN_USER':
    case 'DELETE_MESSAGE':{
      return threads.findIndex(
        (t) => t.id === action.threadId
      );
    }
    // case 'DELETE_MESSAGE': {
    //   const activeThread = threads.filter(t => t.threadId === action.threadId)
    //   return threads.findIndex(
    //     (t) => t.messages.find((m) => (
    //       m.id === action.id
    //     ))
    //   );
    // }
  }
}


export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
    case 'DELETE_MESSAGE': {
      const threadIndex = findThreadIndex(state, action);
      const oldThread = state[threadIndex];   
      const userIndex = oldThread.users.findIndex(u => u.messages.find(m => (
        m.id === action.id
      )))   
      const oldUser = oldThread.users[userIndex]
      const newUser = {...oldUser, messages: messagesReducer(oldUser.messages, action)}
      const newThread = {
        ...oldThread,
        users: [...oldThread.users.slice(0, userIndex),
        newUser,
        ...state.slice(
          userIndex + 1, oldThread.users.length
        ),],
      };
      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(
          threadIndex + 1, state.length
        ),
      ];
    }
    case 'OPEN_USER':
      const threadIndex = findThreadIndex(state, action);
      const oldThread = state[threadIndex];
      const newThread = {
        ...oldThread,
        activeUserId: action.id
      };
      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(
          threadIndex + 1, state.length
        ),
      ];
    default: {
      return state;
    }
  }
}