import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk'
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE({}) : compose

const enhancers = composeEnhancers(
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
)

const store = createStore(reducer, enhancers)

sagaMiddleware.run(todoSagas)

export default store
