import * as user from './action-type'

// 保存用户消息
export const saveUserInfo = (userInfo) => {
    return {
        type: user.SAVE_USERINFO,
        userInfo
    }
}