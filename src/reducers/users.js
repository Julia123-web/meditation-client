const initialState = { userCreated: false, user: null };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "USER_CREATED":
      return { ...state, userCreated: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
