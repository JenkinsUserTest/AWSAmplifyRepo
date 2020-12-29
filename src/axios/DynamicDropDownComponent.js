import React from 'react';
import axios from 'axios';
class DynamicDropDownComponent extends React.Component{

    constructor(){
        super();
        this.state={
            department:[]
        }
        this.axiosvar=null;
    }
    componentDidMount(){
       
       const cancelTokenSource=axios.CancelToken.source();
       this.axiosvar= axios.get("http://localhost:8083/api/departments",{
           cancelToken:cancelTokenSource.token
       })
        .then(response=>{
            this.setState({department:response.data});
        }).catch(console.log);
    }
    render(){
        let arrayOfData=this.state.department;
        let options=arrayOfData.map(
            (d)=><option key={d.departmentId} value={d.departmentId}>{d.departmentName}</option>
        );

     return(
       <select>
        {options}
        </select>
     );
    }

    componentWillUnmount(){
        this.axiosvar.CancelToken.source.cancel();
    }
}
export default DynamicDropDownComponent;