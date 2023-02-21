import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { createUsersStart, updateUsersStart } from '../redux/userDetailsSlice'

const initialState ={
  name:"",
  email:"",
  phone:"",
  address:""
}

const AddEditUser = () => {
  const [form,setForm] = useState(initialState)
  const [editMode,setEditMode] = useState(false)
  const [errorObj, setErrorObj] = useState({})
  const {name,email,phone,address} = form
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {id} = useParams()
  const {userDetails} = useSelector(state => state.data)
    
 useEffect(() => {
    if(id){
        setEditMode(true)
        const singleUser = userDetails?.find((item) => item?.id === Number(id));
        setForm({...singleUser})
    }
 },[id])

  const handleChange = (e) => {
    let errors = { ...errorObj }
    let {name,value} = e.target;
    errors[e.target.name] = e.target.value ? "":`Please enter ${name}` 
    setForm({
        ...form, 
        [name]:value
    })
    setErrorObj({...errors})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validate()){
      return
    }
    if(name && email && phone && address){
      if(!editMode){
        dispatch(createUsersStart(form))
        navigate("/")
      }else {
        dispatch(updateUsersStart({id,form}))
        navigate("/")
      }
    }
  }



  const validate = () => {
    let hasError = false;
    let errors = {...errorObj}
    console.log("errors",errors)
    if(!form?.name){
      errors[`name`] = "Name is Required";
      hasError = true
    }

    if(!form?.email){
      errors[`email`] = "Email is Required";
      hasError = true
    }

    if(!form.phone){
      errors[`phone`] = "Phone is Required";
      hasError = true
    }
    
    setErrorObj({...errors})
    return hasError;

  }
 
  return (
    <>
    <div style={{position:"relative",top:"250px"}}>
    <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input value={name || ""} type="text" name="name" onChange={handleChange}/>
    {errorObj && errorObj["name"] && <span style={{color:"red"}}>{errorObj["name"]}</span>}

    <label>Email</label>
    <input value={email || ""} type="email" name="email" onChange={handleChange}/>
    {errorObj && errorObj["email"] && <span style={{color:"red"}}>{errorObj["email"]}</span>}

    <label>Phone</label>
    <input value={phone || ""} type="number" name="phone" onChange={handleChange}/>
    {errorObj && errorObj["phone"] && <span style={{color:"red"}}>{errorObj["phone"]}</span>}

    <label>Address</label>
    <input value={address || ""} type="text" name="address" onChange={handleChange}/>

    <button>{!editMode ? "Submit":"Update"}</button>
    <button onClick={() => navigate("/")}>Go back</button>
    </form>
    </div>
    </>
  )
}

export default AddEditUser