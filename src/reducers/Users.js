import ACTIONS from 'constants/Actions';

export default function Users(state = '', action) {
  switch (action.type) {
    case ACTIONS.SOME_ACTION:
      return state
    default:
      return state;
  }
}