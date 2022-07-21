import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MemberEntity } from 'entities/member.entity'

interface IinitState {
    isLoading: boolean
    errors: any
    members: MemberEntity[]
}

const initialState: IinitState = {
    isLoading: false,
    errors: null,
    members: [],
}

const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        clear(state) {
            state.members = []
            state.errors = null
        },
        set: (state, action: PayloadAction<MemberEntity[]>) => {
            state.members = action.payload
        },
        startLoading: (state) => {
            state.isLoading = true
        },
        endLoading: (state) => {
            state.isLoading = false
        },
    },
})

export const { actions: memberActionsDefault, reducer: memberReducer } = memberSlice
export const memberActions = Object.assign(memberActionsDefault, {})
