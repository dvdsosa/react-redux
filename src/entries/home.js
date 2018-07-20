import React from 'react';
import { hydrate, render } from 'react-dom';
import Home from '../pages/containers/home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/index'
import { Map as map } from 'immutable'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// function logger({ getState, dispatch}){
//     // return (metodo para despachar el siguiente middleware) => {
//     return (next) => {
//         return (action) => {
//             console.log('es es mi viejo estado', getState().toJS())
//             console.log('vamos a enviar esta accion', action)
//             const value = next(action)
//             console.log('este es mi nuevo estado', getState().toJS())
//             return value
//         }
//     }
// }

const logger_ = ({getState, dispatch }) => next => action => {
    console.log('este es mi viejo estado', getState().toJS())
    console.log('vamos a enviar está acción', action);
    const value = next(action)
    console.log('este es mi nuevo estado', getState().toJS())
    return value
}
  
const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        // convierte el middleware en un enhancer
        applyMiddleware(
            logger,
            logger_,
        )
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
render( 
    <Provider store={store}>
        {/* <Home hola="ola k ase" /> */}
        <Home />
    </Provider> ,
homeContainer);

