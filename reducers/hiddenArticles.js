import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hiddenArticlesSlice = createSlice({
	name: 'hiddenArticles',
	initialState,
	reducers: {
		addHide: (state, action) => {
			state.value.push(action.payload);
		},
        removeHidden: (state) => {
			state.value = [];
		},
		
	},
});


export const { addHide, removeHidden } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;