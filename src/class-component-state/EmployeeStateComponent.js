import React from 'react';
class EmployeeStateComponent extends React.Component{
    constructor(){
        super();
        this.state={
            employee:{
                empId:1003,
                empName:'Sabbir',
                empSalary:34000,
                empDesignation:'Trainer'
            }
        }
    }

render(){

const employeeDetails=(
<table className='myClass'>
<tr>
<th>Employee Id</th><th>Employee Name</th><th>Employee Salary</th><th>Employee Designation</th>
</tr>
<tr>
<td>{this.state.employee.empId}</td>
<td>{this.state.employee.empName}</td>
<td>{this.state.employee.empSalary}</td>
<td>{this.state.employee.empDesignation}</td>
</tr>
</table>
);

return(
    <React.Fragment>
    {employeeDetails}
    </React.Fragment>
);

}

}
export default EmployeeStateComponent;