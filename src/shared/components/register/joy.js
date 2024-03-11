export const initialState = {
  username: {
    value: "",
    error: {
      hasErr: true,
      touch: false,
    },
  },
  email: {
    value: "",
    error: {
      hasErr: true,
      touch: false,
    },
  },
  phoneNumber: {
    value: "",
    error: {
      hasErr: true,
      touch: false,
    },
  },
  password: {
    value: "",
    error: {
      hasErr: true,
      touch: false,
    },
  },
  confirmPassword: {
    value: "",
    error: {
      hasErr: true,
      touch: false,
    },
  },
  noEmptyFeilds: false,
};
export const reducerFn = (state, action) => {
  switch (action.type) {
    case "change_input":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
