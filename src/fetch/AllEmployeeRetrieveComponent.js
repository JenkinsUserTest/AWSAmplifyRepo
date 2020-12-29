import React from 'react';
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
        const fetchEmployeeDetails=async()=>{
          fetch("http://localhost:8083/api/employees")
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
              this.setState({employeeData:data})
          })
          .catch(console.log);
        }
    fetchEmployeeDetails();

    }
    render(){
        return(
       <React.Fragment>

    <table>
        <thead>
   <tr>
   <th>Employee Id</th><th>First Name</th><th>Last Name</th><th>Salary</th>
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