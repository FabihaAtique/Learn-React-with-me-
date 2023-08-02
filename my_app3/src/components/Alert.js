import React from 'react'

export default function Alert(props) {
    const capitalise =(word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // we have said that if props.Alert is present, then the next div will be evaluated, otherwise nothing will be evaluated if props.Alert is null 
    props.Alert && <div className = {`alert alert-${props.Alert.type} alert-dismissable dade show`} role="alert">
    <strong>{capitalise(props.Alert.type)}</strong> : {props.Alert.msg}
   </div>
  )
}

