import { actionTypes } from '../actions';

const initalState = {
  data: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
