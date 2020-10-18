const APP_LOGIN_USER_KEY = 'APP_LOGIN_USER';

export function isLoginAuthorized(){
    let isLogin = sessionStorage.getItem(APP_LOGIN_USER_KEY);
    if(isLogin){
        return true;
    }
    return false;
}

export function saveLoginUser(user){
    sessionStorage.setItem(APP_LOGIN_USER_KEY, JSON.stringify(user));
}