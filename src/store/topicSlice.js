import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiWithAuth} from "../ui/api";

export const getTopics = createAsyncThunk("topic/fetchTopics", async (_, { rejectWithValue }) => {
    try {
        const response = await apiWithAuth.get("/courses/teacher_topics/");

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.detail || error.message);
    }
});

export const getTopicById = createAsyncThunk(
    "topic/fetchTopicById",
    async (id, { rejectWithValue }) => {
        try {
            const response = await apiWithAuth.get(`/courses/teacher_topics/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const topicSlice = createSlice({
    name: "topic",
    initialState: {
        items: [],
        topic: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTopics.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTopics.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getTopics.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getTopicById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTopicById.fulfilled, (state, action) => {
                state.loading = false;
                state.topic = action.payload;
            })
            .addCase(getTopicById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default topicSlice.reducer;
