import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {api} from "../ui/api";

export const authUser = createAsyncThunk(
    'form/authUser',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await api.post("/student/auth/token/", formData);

            const data = response.data;
            if (data.access) {
                localStorage.setItem("token", data.access); // Сохраняем токен в localStorage
            }

            return data; // Возвращаем данные, чтобы обновить store
        } catch (error) {
            return rejectWithValue(error.response?.data?.detail || "Authorization error");
        }
    }
);

const authSlice = createSlice({
    name: 'form',
    initialState: {
        email: '',
        password: '',
        loading: false,
        error: null,
        success: false,
        isAuthenticated: false,
        token: localStorage.getItem("token") || null,
    },
    reducers: {
        setAuthData: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            localStorage.removeItem("token"); // Удаляем токен при выходе
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.token = action.payload.access; // Сохраняем токен в store
                localStorage.setItem("token", action.payload.access); // Записываем в LocalStorage
            })
            .addCase(authUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Что-то пошло не так';
            });
    },
});

export const { setAuthData, logout } = authSlice.actions;

export default authSlice.reducer;
