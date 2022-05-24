import { CHANGE_THEME } from "../types/actions/theme-actions"
import { Theme } from "../types/enums/theme-enums"

const initialThemeState = {
    theme: Theme.LIGHT,
}
  
export const themeReducer = (state = initialThemeState, action) => {
    const changeTheme = () => {
        if (action.payload) {
            return action.payload
        }

        switch (state.theme) {
            case Theme.LIGHT:
                return Theme.DARK
            case Theme.DARK:
                return Theme.BLUE
            default:
                return Theme.LIGHT
        }
    }

    if (action.type === CHANGE_THEME) {
        return {...state, theme: changeTheme()}
    }

    return state
}