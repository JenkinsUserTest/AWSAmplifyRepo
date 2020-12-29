import React from 'react';
import EmployeeHeaderComponent from './EmployeeHeaderComponent';
import EmployeePersonalDetailsComponent from './EmployeePersonalDetailsComponent';
import EmployeeProfessionalDetailsComponent from './EmployeeProfessionalDetailsComponent';
class EmployeeRootComponent extends React.Component{
  
    render(){
        return(
            <div>
            <EmployeeHeaderComponent/>
            <EmployeePersonalDetailsComponent/>
            <EmployeeProfessionalDetailsComponent/>
            </div>
        );
    }
}
export default EmployeeRootComponent;