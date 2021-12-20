import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const fetchBehaviorMetrics = createAsyncThunk(
  'behavior/setBehaviorMetrics',
  async () => {
    const reponse = await services.getBehaviorMetrics();
    console.log(reponse.data);
    return reponse.data[0];
  },
);

export const behaviorMetricsSlice = createSlice({
  name: 'behavior',
  initialState: {
    avgOverallRMSatY1: '##',
    avgOverallRMSatY2: '',
    clientCallsY1: '',
    clientCallsY2: '',
    prospectCallsY1: '',
    prospectCallsY2: '',
    strategiesUploadedY1: '',
    strategiesUploadedY2: '',
  },
  reducers: {},
  extraReducers: {
    [fetchBehaviorMetrics.fulfilled]: (state, { payload }) => {
      state.avgOverallRMSatY1 = `${payload.avg_overall_rm_sat_y1}`;
      state.avgOverallRMSatY2 = `${payload.avg_overall_rm_sat_y2}`;
      state.clientCallsY1 = `${payload.client_calls_y1}`;
      state.clientCallsY2 = `${payload.client_calls_y2}`;
      state.prospectCallsY1 = `${payload.prospect_calls_y1}`;
      state.prospectCallsY2 = `${payload.prospect_calls_y2}`;
      state.strategiesUploadedY1 = `${payload.strat_uploaded_y1}`;
      state.strategiesUploadedY2 = `${payload.strat_uploaded_y2}`;
    },
  },
});

export const { setBehaviorMetrics } = behaviorMetricsSlice.actions;
export default behaviorMetricsSlice.reducer;
