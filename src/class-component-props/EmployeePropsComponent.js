import React from 'react';
class EmployeePropsComponent extends React.Component{

render(){
const jsxVar=(
<table className='myClass'>
<tr>
<th>Employee Id</th><th>Employee Name</th><th>Employee Salary</th><th>Employee Designation</th>
</tr>
<tr>
<td>{this.props.empId}</td>
<td>{this.props.empName}</td>
<td>{this.props.empSalary}</td>
<td>{this.props.empDesignation}</td>
</tr>
</table>
);
return(
    <div>
    {jsxVar}
    </div>
);
}
}
export default EmployeePropsComponent;