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