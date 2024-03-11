export const initialState = {
  username: {
    value: "",
    minLength: 6,
    maxLength: 26,
    error: {
      hasErr: true,
      touch: false,
      message: "",
    },
  },
  email: {
    value: "",
    error: {
      hasErr: true,
      touch: false,
      message: "",
    },
  },
  phoneNumber: {
    value: "",
    error: {
      hasErr: true,
      touch: false,
      message: "",
    },
  },
  password: {
    value: "",
    minLength: 6,
    maxLength: 26,
    error: {
      hasErr: true,
      touch: false,
      message: "",
    },
  },
  confirmPassword: {
    value: "",
    minLength: 6,
    maxLength: 26,
    error: {
      hasErr: true,
      touch: false,
      message: "",
    },
  },
  noEmptyFeilds: false,
};
export const reducerFn = (state, action) => {
  switch (action.type) {
    case "change_input":
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name],
          ...action.payload.value,
        },
      };
    default:
      return state;
  }
};
