import React from "react"
import { Alert } from "reactstrap"
import { connect } from "react-redux"
import { resetAlertAction } from "../../../actions/alertActions"

const GlobalAlert =(props)=>{
    const {text,color}=props.alert
    setTimeout(()=>props.dispatch(resetAlertAction()),3000)
    if(text===""){
        return <></>
    }
    return(
    <Alert color={color}>{text}</Alert>
    )
}
const mapStateToProps=(state)=>{
    return{
        alert:state.alert
    }
}

export default connect(mapStateToProps,null)(GlobalAlert)