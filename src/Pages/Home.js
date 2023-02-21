import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsersStart, loadUserStart } from '../redux/userDetailsSlice'
import { Link } from 'react-router-dom'
import { Row, Table,Col } from 'react-bootstrap'
import './style.scss'

const Home = () => {
    const {userDetails} = useSelector((state) => state.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUserStart())
    },[])
    const handleDelete = (id) => {
        dispatch(deleteUsersStart(id))
        window.location.href ="/"
      }
  
  return (
    <>
    <Row>
      <Col lg={12} xs={12}>

     
    <div className='d-flex align-items-center flex-wrap'>
    <Table striped bordered hover style={{position:"relative",top:"250px"}}>
      <thead>
        <tr className='drop'>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      {userDetails?.map((item,index) => {
      return(
      <tbody key={index}>
        <tr>
          <th>{index+1}</th>
          <td className="table-name">{item?.name}</td>
          <td>{item?.email}</td>
          <td>{item?.phone}</td>
          <td>{item?.address}</td>
          <td>
            <div className="d-flex gap-3" >
            <Link to={`/editUser/${item?.id}`}>
            <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(item?.id)}>Delete</button>
            <Link to={`/userInfo/${item?.id}`}>
            <button>UserInfo</button>
            </Link>
            </div>
          </td>
        </tr>
       
      </tbody>
        )
      })}
    </Table>
    </div>
    </Col>
    </Row>
    </>
  )
}

export default Home