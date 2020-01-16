import {ADD_TO_LIST, REMOVE_ITEM} from './action-types/list-actions'
import data from './data'
//add list action
export const addToList = (id)=>{
    return{
        type: ADD_TO_LIST,
        id
    }
}

export const removeItem = (id)=>{
    return {
        type: REMOVE_ITEM,
        id
    }
}