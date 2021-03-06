import React from 'react';
import axios from 'axios';
class PostEmployeeDataAxios extends React.Component{
    
  constructor(){
      super();
      this.state={
          Employee:{
              empId:0,
              empName:'',
              empSalary:0,
              empDesignation:''
          },
          errors:{
            empId:'',
            empName:'',
            empSalary:'',
            empDesignation:''
          },
          disabled:true,
          res:''
      }
  }
   changeHandler=(event)=>{

      let Employee={...this.state.Employee};
      Employee[event.target.name]=event.target.value;
      this.setState({Employee});
      let errors=this.state.errors;
      const{name,value}=event.target;

      switch(name){

          case 'empId':
          errors.empId=value.length<5 ? 'Emp Id must be 5 digits':'';
          console.log("Length of empId:"+value.length);
          break;

          case 'empName':
          errors.empName=value.length==0 ? 'Emp Name cannot be blank':'';
          console.log("Length of empName:"+value.length);
          break;

          case 'empSalary':
          errors.empSalary=Number(value)<=0 ? 'Salary cannot be negative':'';
          console.log("Value of empSalary:"+value.length);
          break;

          case 'empDesignation':
          errors.empDesignation=value.length==0 ? 'Designation cannot be blank':'';
          console.log("Length of empDesignation:"+value.length);
          break;
      }

      this.setState({errors,[name]:value},()=>{
          console.log(errors);
      })

      const validateForm=(errors)=>{
          let valid=true
          Object.values(errors).forEach(
              (val)=>val.length>0 && (valid=false)
          )
          return valid;
      }

      if(validateForm(this.state.errors)){
          console.log("valid form");
          this.state.disabled=false;
      }
      else{
          console.log("invalid form");
          this.state.disabled=true;
      }


  }

  sendData=(event)=>{
      event.preventDefault();
      axios(
          {
              method:'POST',
              url:'http://localhost:8082/api/employees',
              data:{
            empId:this.state.Employee.empId,
            empName:this.state.Employee.empName,
            empSalary:this.state.Employee.empSalary,
            empDesignation:this.state.Employee.empDesignation
              }
          }
      ).then(response=>{this.setState({res:response.data})}).catch(console.log);

  }
   render(){

      return(
      <React.Fragment>

<form onSubmit={this.sendData}>
Emp Id:<input type='text' value={this.state.Employee.empId} name="empId" onChange={this.changeHandler}/><br></br>
Emp Name:<input type='text' value={this.state.Employee.empName} name="empName" onChange={this.changeHandler}/><br></br>
Emp Salary:<input type='text' value={this.state.Employee.empSalary} name="empSalary" onChange={this.changeHandler}/><br></br>
Emp Designation:<input type='text' value={this.state.Employee.empDesignation} name="empDesignation" onChange={this.changeHandler}/><br></br>
<button disabled={this.state.disabled}>Submit</button>

<br></br>
Errors:
<p>{this.state.errors.empId}</p>
<p>{this.state.errors.empName}</p>
<p>{this.state.errors.empSalary}</p>
<p>{this.state.errors.empDesignation}</p>

<br></br>
<p>Response is :{this.state.res}</p>
</form>
 </React.Fragment>
      );
  }
}

export default PostEmployeeDataAxios;