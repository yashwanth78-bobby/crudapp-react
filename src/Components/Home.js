import React, { Fragment } from 'react';
import {Button,Table} from 'react-bootstrap';
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link,useNavigate} from 'react-router-dom'
import Employees from './Employees';
function Home(){
    let history=useNavigate();
    const handleEdit=(id,Name,Age)=>{
        localStorage.setItem('Name',Name);
        localStorage.setItem('Age',Age);
        localStorage.setItem('Id',id);
    }
    const handleDelete=(id)=>{
      var index=Employees.map(function(e){
        return e.id
      }).indexOf(id);
      Employees.splice(index,1);  
      history('/');
    }
    return(
        <Fragment>
            <h1>Demostrating CRUD operations of React</h1>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
<tbody>
    {
        Employees&&Employees.length>0
        ?
        Employees.map((item)=>{
            return(
                <tr>
                    <td>
                        {item.Name}
                    </td>
                    <td>
                        {item.Age}
                    </td>
                    <td>
                        <Link to={'/edit'}>
                        <Button onClick={()=>handleEdit(item.id,item.Name,item.Age)}>EDIT</Button></Link>&nbsp;
                        <Button onClick={()=>handleDelete(item.id)}>DELETE</Button>
                    </td>
                </tr>
            )
        })
        :
        "No data Available"
    }
</tbody>
                </Table>
                <br />
                <Link className='d-grId gap-2' to="/create">
<Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}
export default Home