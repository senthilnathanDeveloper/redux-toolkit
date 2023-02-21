import axios from "axios";

export const loadUserApi = async() => 
    await axios.get("http://localhost:5000/userDetails")

export const createUsersApi = async (userDetails) => 
    await axios.post("http://localhost:5000/userDetails",userDetails)

export const deleteUsersApi = async (userDetailsId) => 
    await axios.delete(`http://localhost:5000/userDetails/${userDetailsId}`)

export const updateUsersApi = async (userDetailsId,userInfo) => 
    await axios.put(`http://localhost:5000/userDetails/${userDetailsId}`,userInfo)