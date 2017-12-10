import ACTIONS from 'constants/Actions';

let initialState = [{
  'id': 1,
  'name': 'Leanne Graham',
  'email': 'Sincere@april.biz',
  'phone': '1-770-736-8031 x56442',
  'company': {
    'name': 'Romaguera-Crona',
    'catchPhrase': 'Multi-layered client-server neural-net',
    'bs': 'harness real-time e-markets'
  }
}];

export default function Users(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.DRAW_TABLE:
      let users = [];

      action.users.map( user => {
        let u = {
          id: user['id'],
          name: user['name'],
          email: user['email'],
          company: user['company'],
          phone: user['phone']
        };
        users.push(u)
      });
      return users;
    case ACTIONS.REMOVE_USER:
      return state.filter((user) => action.user.id !== user.id);
    case ACTIONS.ADD_USER:
      console.log(action)
      let withNewUser = [...state];
      action.id = Date.now();
      withNewUser.push(action.user);
      return withNewUser;
    default:
      return state;
  }
}
