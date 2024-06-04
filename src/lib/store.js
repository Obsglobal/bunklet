import { roleSlice } from '@/features/roleSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = () => {
  return configureStore({
    reducer: {
        role: roleSlice.reducer,
    },
  })
}