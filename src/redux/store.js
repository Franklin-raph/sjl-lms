import { configureStore } from '@reduxjs/toolkit'
import studentAuthReducer from './studentAuthSlice'

export default configureStore({
    reducer:{
        studentAuth: studentAuthReducer,
    }
})