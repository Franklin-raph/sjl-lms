const logedInStudent = JSON.parse(localStorage.getItem('student'))
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const updateStudentProfile = createAsyncThunk(
    'studentProfileUpdateThunk',
    async (payload) => {
        const response = fetch('https://onlinelearn.pythonanywhere.com/accounts/myprofile/update/', {
            method: ""
        })
    }
)