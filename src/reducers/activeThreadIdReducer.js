import { v4 as uuidv4 } from 'uuid';

const initialState = "1-fca2"

export default function(state = initialState, action) {
  switch (action.type) {
    case "OPEN_THREAD":
      console.log(action)
      return action.id
    default:
      return state;
  }
}