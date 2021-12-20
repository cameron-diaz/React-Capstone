import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './clientRelationSlice';
import summary1Reducer from './summary1Slice';
import summary2Reducer from './summary2Slice';
import userReducer from './userSlice';
import outcomeMetricsReducer from './outcomeMetricsSlice';
import behaviorMetricsReducer from './behaviorMetricsSlice';
import opportunitySummaryReducer from './opportunitySummarySlice';

export const store = configureStore(
  {
    reducer: {
      userInfo: userReducer,
      clientInfo: clientReducer,
      summary1: summary1Reducer,
      summary2: summary2Reducer,
      outcomeMetrics: outcomeMetricsReducer,
      behaviorMetrics: behaviorMetricsReducer,
      opportunitySummary: opportunitySummaryReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
