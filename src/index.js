import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './composants/MainPage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
                <MainPage/>
                </Provider>,
                document.getElementById('root'));
