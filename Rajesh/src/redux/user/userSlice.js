import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loaging = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loaging = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loaging = false;
        },
    }
});
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
export default userSlice.reducer;

export class updateUserStart {
}

export class updateUserSuccess {
}

export class updateUserFailure {
}

export class deleteUserFailure {
}

export class deleteUserStart {
}

export class deleteUserSuccess {
}

export class signOutUserStart {
}