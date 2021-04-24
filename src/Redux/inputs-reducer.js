const GET_INPUT = "GET_INPUT";

const initialState = {
  registerData: {},
};

const inputsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INPUT:
      return {
        ...state,
        registerData: Object.assign(action.value, state.registerData),
      };
    default:
      return state;
  }
};

export const getInputFirstStep = (value) => {
  return {
    type: GET_INPUT,
    value,
  };
};

export default inputsReducer;
