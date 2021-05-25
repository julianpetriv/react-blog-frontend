import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {ARTICLES_URL} from '../../constants/index';
import { GetResource, PostResource, PutResource, DeleteResource } from '../../services/index'

export const getArticles = createAsyncThunk(
    'getArticles',
    async (arg, {rejectWithValue}) => {              
        try {            
            const result = await GetResource(ARTICLES_URL);
            return result;
        }
        catch (err) {
            toast.error(err.response ? err.response.data : err.message);
            return rejectWithValue(err.response ? err.response.data : err.message);
        }
    }
);
export const createArticle = createAsyncThunk(
    'createArticle',
    async (article, {rejectWithValue, dispatch}) => {              
        try {            
            const result = await PostResource(ARTICLES_URL, article);
            dispatch(getArticles());
            return result;
        }
        catch (err) {
            toast.error(err.response ? err.response.data : err.message);
            return rejectWithValue(err.response ? err.response.data : err.message);
        }
    }
);

export const updateArticle = createAsyncThunk(
    'updateArticle',
    async (article, {rejectWithValue, dispatch}) => {              
        try {            
            const result = await PutResource(ARTICLES_URL+"/"+article.id, article);
            dispatch(getArticles());
            return result;
        }
        catch (err) {
            toast.error(err.response ? err.response.data : err.message);
            return rejectWithValue(err.response ? err.response.data : err.message);
        }
    }
);

export const removeArticle = createAsyncThunk(
    'removeArticle',
    async (article, {rejectWithValue, dispatch}) => {              
        try {            
            const result = await DeleteResource(ARTICLES_URL+"/"+article.id);
            dispatch(getArticles());
            return result;
        }
        catch (err) {
            toast.error(err.response ? err.response.data : err.message);
            return rejectWithValue(err.response ? err.response.data : err.message);
        }
    }
);

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        getArticles: {
            success: false,
            error: null,
            articles: []
        },
        updateArticle: {
            success: false,
            error: null
        },
    },
    extraReducers: {
        [getArticles.pending]: state => {
            state.getArticles.success = false;
            state.getArticles.error = null;
        },
        [getArticles.fulfilled]: (state, action) => {
            state.getArticles.success = true;
            state.getArticles.articles = action.payload;
        },
        [getArticles.rejected]: (state, action) => {
            state.getArticles.success = false;
            state.getArticles.user = {};
            state.getArticles.error = action.payload;
        },

        [createArticle.pending]: state => {
            state.updateArticle.success = false;
            state.updateArticle.error = null;
        },
        [createArticle.fulfilled]: (state, action) => {
            state.updateArticle.success = true;
        },
        [createArticle.rejected]: (state, action) => {
            state.updateArticle.success = false;
            state.updateArticle.error = action.payload;
        },

        [updateArticle.pending]: state => {
            state.updateArticle.success = false;
            state.updateArticle.error = null;
        },
        [updateArticle.fulfilled]: (state, action) => {
            state.updateArticle.success = true;
        },
        [updateArticle.rejected]: (state, action) => {
            state.updateArticle.success = false;
            state.updateArticle.error = action.payload;
        },

        [removeArticle.pending]: state => {
            state.updateArticle.success = false;
            state.updateArticle.error = null;
        },
        [removeArticle.fulfilled]: (state, action) => {
            state.updateArticle.success = true;
        },
        [removeArticle.rejected]: (state, action) => {
            state.updateArticle.success = false;
            state.updateArticle.error = action.payload;
        }
    }
});

export default articlesSlice.reducer;