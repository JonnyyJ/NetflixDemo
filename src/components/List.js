import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeItem } from './actions/listActions'

class List extends Component{
    //to remove the item completely
    handleRemove = (id) =>{
        this.props.removeItem(id)
    }
    render(){
        let addedItems = this.props.items.length ?
        (
           this.props.items.map(item =>{
               return(
                   <li key = {item.id}>
                       <div>
                           <span>{item.title}</span>
                           <button onClick = {()=>{this.handleRemove(item.id)}}>Remove</button>
                       </div>
                   </li>
               )
           }) 
        ):
        (
            <p>Nothing.</p>
        )
        return (
            <div className = "container">
                 <h5>Thanks</h5>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {dispatch(removeItem(id))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)