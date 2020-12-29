import React from 'react';
import axios from 'axios';
class AllEmployeeRetrieveComponent extends React.Component{

    constructor(){
        super();
        this.state={
            employeeData:{
                employees:[]
            }
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8083/api/employees")
        .then(response=>{
            this.setState({employeeData:response.data});
        }).catch(console.log);
    }
    render(){

     return(
       <React.Fragment>

    <table class="table table-striped">
        <thead>
   <tr>
   <th scope="col">Employee Id</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">Salary</th>
   </tr>
   </thead>
   <tbody>
   {this.state.employeeData.employees.map(

       (e)=>(
           <tr key={e.employeeId}>
            <td>{e.employeeId}></td>
            <td>{e.firstName}</td>
            <td>{e.lastName}</td>
            <td>{e.salary}</td>
            </tr>
       )
   )}
</tbody>
   </table>
        </React.Fragment>

        );
    }
}
export default AllEmployeeRetrieveComponent;