import { configureStore, createSelector, createSlice } from "@reduxjs/toolkit"

const connectionState = {
    isConnected: false,
    isConnecting: false,
}
export const connectionSlice = createSlice({
    name: "connection",
    initialState: connectionState,
    reducers: {
        setIsConnected: (state, action) => {
            state.isConnected = action.payload
        },
        setIsConnecting: (state, action) => {
            state.isConnecting = action.payload
        }
    }
})

const { actions, reducer } = connectionSlice

const Store = configureStore({
    reducer: {
        connection: reducer
    }
})
type RootState = ReturnType<typeof Store.getState>
type AppDispatch = typeof Store.dispatch
const getIsConnected = createSelector(
    (state: RootState) => state,
    (state) => state.connection.isConnected
)
const getIsConnecting = createSelector(
    (state: RootState) => state,
    (state) => state.connection.isConnecting
)

export { Store, actions, getIsConnected, getIsConnecting }
export type { RootState, AppDispatch }
export default {...actions, getIsConnected, getIsConnecting}