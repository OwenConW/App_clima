import { changeMode } from "../reducer/reducer"


export const changeModeAction = (mode) => (dispatch) => {
    return dispatch(changeMode(mode))
}