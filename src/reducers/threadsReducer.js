import { v4 as uuidv4 } from 'uuid';
import messagesReducer from './messageReducer'
import moment from 'moment';
 
const initialState = [ // Two threads in state
  {
    threadId: '1-fca2', // hardcoded pseudo-UUID
    threadName: 'Thread 1',
    activeUserId:'1',
    users: [{
      id: '1',
      name: 'Buzz Aldrin',
      messages: [{ // This thread starts with a single message already
        text: 'Twelve minutes to ignition.',
        timestamp: Date.now() - 10000,
        id: uuidv4(),
      },]
    },
    {
      id: '2',
      name: 'Michael Collins',
      messages: [{ // This thread starts with a single message already
        text: 'I am Michael Collins',
        timestamp: Date.now() + 10000,
        id: uuidv4(),
      },
      { // This thread starts with a single message already
        text: 'I am Mi',
        timestamp: Date.now(),
        id: uuidv4(),
      }]
    }]
  },
  {
    threadId: '1-fca3', // hardcoded pseudo-UUID
    threadName: 'Thread 2',
    activeUserId:'1',
    users: [{
      id: '1',
      name: 'Kowa',
      messages: [{ // This thread starts with a single message already
        text: 'Twelve minutes to fire.',
        timestamp: Date.now() - 10000,
        id: uuidv4(),
      },]
    },
    {
      id: '2',
      name: 'Saki',
      messages: [{ // This thread starts with a single message already
        text: 'I am Saki',
        timestamp: Date.now() + 10000,
        id: uuidv4(),
      },
      { // This thread starts with a single message already
        text: 'I am Mi',
        timestamp: Date.now(),
        id: uuidv4(),
      }]
    }]
  }
]
function findThreadIndex(threads, action) {
  console.log(action)
      return threads.findIndex(
        (t) => t.threadId === action.threadId
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



export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
    case 'DELETE_MESSAGE': {
      const threadIndex = findThreadIndex(state, action);
      console.log(threadIndex)
      const oldThread = state[threadIndex];   
      const userIndex = oldThread.users.findIndex(u => u.id === action.userId)   
      const oldUser = oldThread.users[userIndex]
      console.log(oldUser)
      const newUser = {...oldUser, messages: messagesReducer(oldUser.messages, action)}
      const newThread = {
        ...oldThread,
        users: [...oldThread.users.slice(0, userIndex),
        newUser,
        ...oldThread.users.slice(
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
    case 'OPEN_USER': {
      const threadIndex = findThreadIndex(state, action);
      console.log(threadIndex)
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
    }
    case 'ADD_THREAD':{
      const newThread = {
        threadId: uuidv4(),
        threadName: action.threadName,
        activeUserId: '1',
        users: [
          {
            id: '1',
            name: action.userName[0],
            messages: []
          },
          {
            id: '2',
            name: action.userName[1],
            messages: []
          }
        ]
      }
      return state.concat(newThread)
    }
    default: {
      return state;
    }
  }
}