import React from 'react'
import { connect } from 'react-redux'
import { addToList} from './actions/listActions'

class Home extends Component {
    hanldeClick = (id)=>{
        this.props.addToList(id)
    }
    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div key = {item.id}>
                    <div>
                        <div>{item.title}</div>
                        <button to ='/' onClick={()=>{this.hanldeClick(item.id)}}><i className ="material-icons">add</i></button>
                    </div>

                    <div>
                         <p>{item.desc}</p>
                         <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>
            )
        })
        return (
            <div className = "container">
                <h3 className = "center">React-Redux-Store</h3>
                <div className = "box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        items: state.items
    }
}
const mapleDispatchToProps = (dispatch) =>{
    return {
        addToList: (id) =>{dispatch(addToList(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)