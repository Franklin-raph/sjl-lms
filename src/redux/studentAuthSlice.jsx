import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const loginStudent = createAsyncThunk(
    'studentLoginThunk',
    async (payload, thunkAPI) => {
        const response = await fetch('https://onlinelearn.pythonanywhere.com/accounts/login-logout/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email: payload.email,
                password: payload.password
            })
        });
        console.log(JSON.stringify({
            email: payload.email,
            password: payload.password
        }))
        console.log(response)
        const data = await response.json();
        if (!response.ok) {
            console.log(data);
            return { data }
        }
        if (response.ok) {
            localStorage.setItem('student', JSON.stringify(data))
            console.log(data);
            return { data }
        }
    }
)

export const logoutStudent = createAsyncThunk(
    'studentLogoutThunk',
    async () => {
        const response = await fetch('https://onlinelearn.pythonanywhere.com/accounts/login-logout/')
        const data = await response.json()
        console.log(data);

        if (response.ok) {
            localStorage.removeItem('student')
        }
    }
)

const logedInStudent = JSON.parse(localStorage.getItem('student'))

const initialState = {
    studentData: logedInStudent ? logedInStudent : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const studentAuthSlice = createSlice({
    name: "studentAuth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false,
                state.isSuccess = false,
                state.isLoading = false,
                state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginStudent.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(loginStudent.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.studentData = action.payload
            })
            .addCase(loginStudent.rejected, (state, action) => {
                state.isError = true
                state.isSuccess = false
                state.isLoading = false
                state.message = action.payload
                state.studentData = null
            })

            .addCase(logoutStudent.fulfilled, (state) => {
                state.studentData = null
            })
    }
})

export const { reset } = studentAuthSlice.actions
export default studentAuthSlice.reducer