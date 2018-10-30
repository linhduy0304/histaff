
import { LOGIN_LOADING } from "../config/types";

const Auth = require('../services/Auth');

export const loading = (loading) => {
    return {
        type: LOGIN_LOADING,
        loading
    }
}
export const login = (body) => {
    return dispatch => {
        dispatch(loading(true))
        return Auth.login(body).then(res => {
            console.log(res)
            switch(res.meta.code) {
                case 1:
                new Store().storeSession(Const.ARR_ID_NOTI, []);
                new Store().storeSession(Const.TOKEN, res.data.token);
                new Store().storeSession(Const.IS_LOGIN, true);
                Actions.tab({type: 'reset'})
                dispatch(profileUserSuccess(res.data.info));
                dispatch(loading(null));
                return;
                default:
                SimpleToast.show(res.meta.message)
                dispatch(loading(null));
                return;
            }
        })
        .catch((error) => {
          dispatch(loading(null))
        });
    };
  }