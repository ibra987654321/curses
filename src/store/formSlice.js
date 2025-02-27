import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {api} from "../ui/api";

export const registerUser = createAsyncThunk(
    'form/registerUser',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await api.post("/student/auth/register/", formData);

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

const formSlice = createSlice({
    name: 'form',
    initialState: {
        email: '',
        password1: '',
        password2: '',
        loading: false,
        error: null,
        success: false,
        token: localStorage.getItem("token") || null,
    },
    reducers: {
        setFormData: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.token = action.payload.access; // Сохраняем токен в store
                localStorage.setItem("token", action.payload.access);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Что-то пошло не так';
            });
    },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
