// import react from 'react';
// import { createStore } from '@reduxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import store from '../src/index';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// const storeDecor = configureStore(store);
// console.log(storeDecor);
// export const decorators = [
//   Story => (
//     <Provider store={store}>
//       <Story />
//     </Provider>
//   ),
// ];
