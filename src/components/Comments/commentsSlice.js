import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {ARTICLES_URL, COMMENTS_URL} from '../../constants/index';
import { PostResource, DeleteResource } from '../../services/index'
import { getArticle } from '../Articles/articlesSlice';

export const createComment = createAsyncThunk(
    'createComment',
    async ({article, comment}, {rejectWithValue, dispatch}) => {              
        try {
            console.log(article, comment)
            const result = await PostResource(`${ARTICLES_URL}/${article.id}/${COMMENTS_URL}`, comment);
            dispatch(getArticle(article.id));
            return result;
        }
        catch (err) {
            toast.error(err.response ? (err.response.data.error || err.response.data.errors.join(", ")) : err.message);
            return rejectWithValue(err.response ? err.response.data : err.message);
        }
    }
);

export const removeComment = createAsyncThunk(
    'removeComment',
    async ({article, comment}, {rejectWithValue, dispatch}) => {     
        console.log(article, comment) 
        try {            
            const result = await DeleteResource(`${ARTICLES_URL}/${article.id}/${COMMENTS_URL}/${comment.id}`);
            dispatch(getArticle(article.id));
            return result;
        }
        catch (err) {
            toast.error(err.response ? (err.response.data.error || err.response.data.errors.join(", ")) : err.message);
            return rejectWithValue(err.response ? err.response.data : err.message);
        }
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        updateComment: {
            success: false,
            error: null
        },
    },
    extraReducers: {
        [createComment.pending]: state => {
            state.updateComment.success = false;
            state.updateComment.error = null;
        },
        [createComment.fulfilled]: (state, action) => {
            state.updateComment.success = true;
        },
        [createComment.rejected]: (state, action) => {
            state.updateComment.success = false;
            state.updateComment.error = action.payload;
        },

        [removeComment.pending]: state => {
            state.updateComment.success = false;
            state.updateComment.error = null;
        },
        [removeComment.fulfilled]: (state, action) => {
            state.updateComment.success = true;
        },
        [removeComment.rejected]: (state, action) => {
            state.updateComment.success = false;
            state.updateComment.error = action.payload;
        }
    }
});

export default commentsSlice.reducer;