import ACTIONS from 'constants/Actions';

/**
 * ActionCreator
 * Actions are payloads of information that send data from your application to your store.
 * @returns {{type: string}}
 */

export const drawTable = (users) => ({
  type: ACTIONS.DRAW_TABLE,
  users
});

export const removeUser = (user) => ({
  type: ACTIONS.REMOVE_USER,
  user
});

export const addUser = (user) => ({
  type: ACTIONS.ADD_USER,
  user
});