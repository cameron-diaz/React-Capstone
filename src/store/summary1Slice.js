import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const fetchSummary1 = createAsyncThunk(
  'client/setSummary1',
  async () => {
    const reponse = await services.getSummary1();
    // console.log(reponse.data);
    return reponse.data[0];
  },
);

export const summary1Slice = createSlice({
  name: 'summary1',
  initialState: {
    avgLoanBal: '##',
    avgCreditComm: '',
    depBal: '',
  },
  reducers: {},
  extraReducers: {
    [fetchSummary1.fulfilled]: (state, { payload }) => {
      state.avgLoanBal = `${payload.ttm_avg_loan_bal}`;
      state.avgCreditComm = `${payload.ttm_avg_credit_comm}`;
      state.depBal = `${payload.ttm_dep_bal}`;
    },
  },
});

export const { setSummary1 } = summary1Slice.actions;
export default summary1Slice.reducer;
