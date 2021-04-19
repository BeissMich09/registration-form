const GET_INPUT = "GET_INPUT";

const initialState = {
  registerData: {},
};

const inputsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INPUT:
      let obj = Object.assign(state.registerData, action.value);
      return {
        ...state,
        registerData: obj,
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
