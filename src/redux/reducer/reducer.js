import { createAction, createReducer} from "@reduxjs/toolkit"

export const changeMode = createAction('change/mode')

const initialState = { 
    mode: null
}

const rootReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(changeMode, (state, action) => {
          state.mode = action.payload
      })
})


export default rootReducer