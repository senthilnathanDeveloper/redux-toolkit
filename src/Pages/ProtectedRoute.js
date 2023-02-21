import React from 'react'
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({component,...rest}) => {
    console.log("component",component);
    console.log("res",rest)
    const RenderComponent = component;
  return (
    <>
    <Route 
    {...rest} 
    render = {props => {
        return false ? (
            <RenderComponent {...props}  />
        ):(
            <Navigate to={{pathName:"/login"}}/>
        )
    }}/>
    </>
  )
}

export default ProtectedRoute