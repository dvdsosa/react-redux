import React from 'react';
import { hydrate, render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
// import data from '../api.json';
// console.log('Hola mundo!' )
// import data from '../schemas/index'
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducer from '../reducers/index'
import { Map as map } from 'immutable'


// console.log(normalizedData)
// console.log(data)

// const initialState = {
//     data: {
//         // ...data
//         entities: data.entities,
//         categories: data.result.categories,
//         search: []
//     },
//     modal: {
//         visibility: false,
//         mediaId: null,
//     }
// }

const store = createStore(
    reducer,
    // (state) => state,
    // initialState,
    map(),
    // enhancer
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// console.log(store.getState)

const homeContainer = document.getElementById('home-container')


// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
render( 
    <Provider store={store}>
        {/* <Home hola="ola k ase" /> */}
        <Home />
    </Provider> ,
homeContainer);

