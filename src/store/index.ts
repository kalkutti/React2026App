import { configureStore } from '@reduxjs/toolkit'
import dressReducer from './dress'

export const store = configureStore({
    reducer:{
        dresses:dressReducer
    }
})