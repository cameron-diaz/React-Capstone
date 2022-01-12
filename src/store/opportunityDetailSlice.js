import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const fetchOpportunityDetail = createAsyncThunk(
  'opportunityDetail/setOpportunityDetail',
  async () => {
    const reponse = await services.getOpportunityDetail();
    console.log(reponse.data);
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
      state.opportunities = payload;
      // state.relationship = `${payload[1].client_name}`;
      // state.product = `${payload[1].product_type}`;
      // state.salesStage = `${payload[1].sales_stage}`;
      // state.revenue = `${payload[1].revenue}`;
      // state.dateClosed = `${payload[1].date_closed}`;
    },
  },
});

export const { setOpportunityDetail } = opportunityDetailSlice.actions;
export default opportunityDetailSlice.reducer;
