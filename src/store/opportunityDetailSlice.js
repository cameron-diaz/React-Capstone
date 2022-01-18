import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const fetchOpportunityDetail = createAsyncThunk(
  'opportunityDetail/setOpportunityDetail',
  async () => {
    const reponse = await services.getOpportunityDetail();
    return reponse.data;
  },
);

export const opportunityDetailSlice = createSlice({
  name: 'opportunityDetail',
  initialState: {
    opportunities: [],
  },
  reducers: {},
  extraReducers: {
    [fetchOpportunityDetail.fulfilled]: (state, { payload }) => {
      state.opportunities = payload.map(v => ({ ...v, details: 'Details' }));
    },
  },
});

export const { setOpportunityDetail } = opportunityDetailSlice.actions;
export default opportunityDetailSlice.reducer;
