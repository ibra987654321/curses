import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiWithAuth} from "../ui/api";

export const getCourses = createAsyncThunk("courses/fetchCourses", async (_, { rejectWithValue }) => {
    try {
        const response = await apiWithAuth.get("/courses/teacher_courses/");

        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getCourseById = createAsyncThunk(
    "courses/fetchCourseById",
    async (id, { rejectWithValue }) => {
        try {
            const response = await apiWithAuth.get(`/courses/teacher_courses/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getCourseVideo = createAsyncThunk(
    "courses/fetchCourseVideo",
    async (id, { rejectWithValue }) => {
        try {
            const response = await apiWithAuth.get(`/courses/teacher_videos/${id}/`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const courseSlice = createSlice({
    name: "courses",
    initialState: {
        items: [],
        course: null,
        videoUrl: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCourses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCourses.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getCourses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getCourseById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCourseById.fulfilled, (state, action) => {
                state.loading = false;
                state.course = action.payload;
            })
            .addCase(getCourseById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getCourseVideo.pending, (state) => {
                    state.loading = true;
            })
            .addCase(getCourseVideo.fulfilled, (state, action) => {
                state.loading = false;
                state.videoUrl = action.payload.video;
            })
            .addCase(getCourseVideo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

    },
});

export default courseSlice.reducer;
