//组合子模块， 到处store

import billReducer from './modules/billStore'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        bill:billReducer
    }
})

export default store