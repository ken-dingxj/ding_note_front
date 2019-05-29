import * as user from './action-type'

let defaultState = {
    userInfo: {}
}

// 用户消息
export default (state = defaultState, action = {}) => {
    if(action.type==user.SAVE_USERINFO){
        return {
            ...state,
            userInfo: action.userInfo
        }
    }
}