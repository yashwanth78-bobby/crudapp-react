import React ,{useState,useEffect} from "react";
import {Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom'


const Edit = () => {
    const[Name,setName]=useState('');
    const[Age,setAge]=useState('');
    const[id,setId]=useState('');
    let history=useNavigate();
    var index=Employees.map(function(e){
        return e.id
      }).indexOf(id);
    //   const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     let a=Employees[index];
    //     a.Name=Name;
    //     a.Age=Age;
    //     history("/");
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (index !== -1) {
          let updatedEmployee = { ...Employees[index], Name, Age };
          Employees[index] = updatedEmployee;
          // Perform any necessary updates or save data here
          history("/");
        } else {
          // Handle the case where the specified id was not found in Employees
          console.error(`Employee with id ${id} not found.`);
        }
      }
    useEffect(()=>{
        setName(localStorage.getItem("Name"))
        setAge(localStorage.getItem("Age"))
        setId(localStorage.getItem("Id"))
    },[])
  return (
    <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" placeholder="Enter Name" value={Name} required onChange={(e)=>setName(e.target.value)}>

            </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
            <Form.Control type="text" placeholder="Enter Age" value={Age} required onChange={(e)=>setAge(e.target.value)}>

            </Form.Control>
        </Form.Group>
        <Button onClick={(e)=>handleSubmit(e)} type="submit">
Update
        </Button>
    </Form>
    </div>
  )
}

export default Edit
