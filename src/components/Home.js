import React from 'react'
import { connect } from 'react-redux'
import { addToList} from './actions/listActions'

class Home extends Component {
    hanldeClick = (id)=>{
        this.props.addToList(id)
    }
    render(){
        
    }
}