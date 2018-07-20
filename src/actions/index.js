import { 
    OPEN_MODAL, 
    CLOSE_MODAL, 
    SEARCH_ENTITIES, 
    SEARCH_ASYNC_ENTITIES 
} from '../actions-types/index'


// una funcion que regresa una acción
export function openModal(mediaId) {
    return {
        type: OPEN_MODAL,
        payload: {
          mediaId: mediaId
        }
    }
}
export function closeModal() {
    return {
        type: CLOSE_MODAL,
    }
}
export function searchEntities(query) {
    return {
        type: SEARCH_ENTITIES,
        payload: {
            query
        }
    }
}
export function searchAsyncEntities(query) {
    return(dispatch) => {
        // fetch().then(()=>{})
        // XMLHttpRequest
        // trae
        // esperamos 5 segundos para emular una petición asíncrona
        setTimeout(()=>{
            dispatch(searchEntities(query))
        }, 5000)
    }
}