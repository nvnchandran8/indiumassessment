import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import {reducerFunc} from './store/reducer';
import DisplaySeason from './AssessmentContainer';
import rootSaga from './Sagas';
import logo from './logo.svg';
import './App.css';

const sagaMiddleware = createSagaMiddleware();

const reduxStore = createStore(reducerFunc,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={reduxStore}>

      <DisplaySeason />

    </Provider>
  );
}

export default App;
