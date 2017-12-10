import ACTIONS from 'constants/Actions';

let initialState = [{
  'id': 1,
  'name': 'Leanne Graham',
  'username': 'Bret',
  'email': 'Sincere@april.biz',
  'address': {
    'street': 'Kulas Light',
    'suite': 'Apt. 556',
    'city': 'Gwenborough',
    'zipcode': '92998-3874',
    'geo': {
      'lat': '-37.3159',
      'lng': '81.1496'
    }
  },
  'phone': '1-770-736-8031 x56442',
  'website': 'hildegard.org',
  'company': {
    'name': 'Romaguera-Crona',
    'catchPhrase': 'Multi-layered client-server neural-net',
    'bs': 'harness real-time e-markets'
  }
}];

export default function Users(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.DRAW_TABLE:
      console.log(action.users)
      return action.users
    default:
      return state;
  }
}