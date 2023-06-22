// loginReducer.ts
const initialState = {
    loggedIn: false,
  };
  
  type LoginState = {
    loggedIn: boolean;
  };
  
  type LoginAction = { type: 'LOGIN' } | { type: 'LOGOUT' };
  
  const loginReducer = (state: LoginState = initialState, action: LoginAction) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          loggedIn: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          loggedIn: false,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;  