import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const fetchUserInfo = createAsyncThunk('user/setUserInfo', async () => {
  const response = await services.getUsers();
  // console.log(response.data);
  return response.data[0];
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: 'A persons name',
    hireDate: '',
    role: '',
    teamLead: '',
  },
  reducers: {},
  extraReducers: {
    [fetchUserInfo.fulfilled]: (state, { payload }) => {
      state.userName = `${payload.first_name} ${payload.last_name}`;
      state.hireDate = '10/23/2017';
      state.role = payload.role;
      state.teamLead = `${payload.tl_first_name} ${payload.tl_last_name} `;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;

// $ curl -u cdiazit5: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 https://api.github.com/cdiazit5
