import { AsyncStorage } from 'react-native';


export const initialState = {
    isLoading: false,
    isAuthenticated: false,
    // isAuthenticated: true,
    user: {},
    error: null
  };

export const START_LOGIN = "Login/START_LOGIN";
export const LOGIN_SUCCESS = "Login/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "Login/LOGIN_FAILURE";
export const RESET_ERROR = "Login/RESET_ERROR";
export const LOGIN_USER = "Login/LOGIN_USER";
export const SIGN_OUT_SUCCESS = "Login/SIGN_OUT_SUCCESS";


export const start_login = ()=>({
    type:START_LOGIN
})

export const login_success=(user)=>({
    type:LOGIN_SUCCESS,
    payload:user
})

export const login_failure  =()=>({
    type:LOGIN_FAILURE
})

export const reset_error=()=>({
    type:RESET_ERROR
})

export const loginUser = (username,password) => dispatch=>{
    console.log(username,password)
    dispatch(start_login());

    if(!!username && !!password){
        if(username=="ishanarora143" && password == "Fuckingfriends143"){
            // localStorage.setItem("login",'true')
            console.log('yippie')
            
            dispatch(login_success({name:'ishan arora',email:'eshanarora00001@gmail.com',rank:1}))

        }else{
            dispatch(login_failure())
        }
    }
    else{
        dispatch(login_failure())
    }
}

export const signOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS
  });
  
  export const signOut = () => dispatch => {
    // localStorage.removeItem("login");
    const deleteUserId = async () => {
        try {
          await AsyncStorage.removeItem('login');
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
      }
      deleteUserId()
    dispatch(signOutSuccess());
  };


  
  export default function LoginReducer(state = initialState, { type, payload }) {
    switch (type) {
      case START_LOGIN:
        return {
          ...state,
          isLoading: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isAuthenticated: true,
          error: null,
          user: payload
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          isAuthenticated: false,
          error: true
        };
      case RESET_ERROR:
        return {
          error: false
        };
      case SIGN_OUT_SUCCESS:
        return {
          ...state,
          isAuthenticated: false
        };
      default:
        return state;
    }
  }
  
  