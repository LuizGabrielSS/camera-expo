import { configureStore } from '@reduxjs/toolkit'
import Auth from ''

export default configureStore({
    reducer: {
        auth:Auth,
    }
})