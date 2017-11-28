import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RootRouter from './router/RootRouter';
//引入全局store
import rootReducer from './reducers';
import configStore from './store/configStore';
let store = configStore();




ReactDOM.render(
  <Provider store={store}>
    <RootRouter/>
  </Provider>,
  document.getElementById("root")
)

if (module.hot) {
 module.hot.accept();
}
// if(module.hot) {
//     module.hot.accept('./index', () => {
//         const NextRootContainer = require('./index').default
//         render(NextRootContainer)
//     })
// }
