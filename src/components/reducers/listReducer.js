import {ADD_TO_LIST, REMOVE_ITEM} from '.actions/action-types/list-actions'
import data from './data'
const initiaState = {
    items: [
         ...data.mylist.map(s => ({s})),
         ...data.recommendations.map(s =>({s}))
    ],
    addedItems:[],
    total: 0
}
const listReducer = (state = initState, action) =>{
    //Inside home component
    if(action.type === ADD_TO_LIST){
        let addedItem = state.items.find(item => item.id === action.id)
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove = state.addedItems.find(item =>action.id === item.id),
            new_items = state.addedItems.filter(item => action.id !== item.id)
        
            //calculation
    }
}