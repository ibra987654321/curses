import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {api} from "../ui/api";

export const registerUser = createAsyncThunk(
    'form/registerUser',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await api.post('/student/auth/register/', {
              ...formData
            });

            if (!response.ok) {
                throw new Error('Ошибка при регистрации');
            }

            const data = await response.json();
            return data; // Возвращаем данные, которые потом будут использованы в reducer
        } catch (error) {
            return rejectWithValue(error.message); // Отправляем ошибку
        }
    }
);

const formSlice = createSlice({
    name: 'form',
    initialState: {
        username: '',
        email: '',
        password1: '',
        password2: '',
        loading: false,
        error: null,
        success: false,
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
                // Можно сохранить данные пользователя или сделать другие изменения
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Что-то пошло не так';
            });
    },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
