import React from 'react';
class EmployeeDetails extends React.Component{

render(){
const jsxVar=(
<table className='myClass'>
<tr>
<th>Employee Id</th><th>Employee Name</th><th>Employee Salary</th><th>Employee Designation</th>
</tr>
<tr>
<td>1001</td>
<td>Sabbir</td>
<td>34000</td>
<td>Trainer</td>
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
export default EmployeeDetails;