import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import EmployeeComponent from './class-component/EmployeeComponent';
import EmployeeRootComponent from './class-component/EmployeeRootComponent';
import EmployeeRootFunctionalComponent from './functional-component/EmployeeRootFunctionalComponent';
import JSXComponent from './jsx/JSXComponent';
import EmployeeStateComponent from './class-component-state/EmployeeStateComponent';
import EmployeeDetails from './jsx/EmployeeDetails';
import FragmentComponent from './jsx/FragmentComponent';
import EmployeeModifyStateRegularFunction from './class-component-state/EmployeeModifyStateRegularFunction';
import EmployeeModifyStateArrowFunction from './class-component-state/EmployeeModifyStateArrowFunction';
import MaintainStateFunctionalComponent from './functional-component-state/MaintainStateFunctionalComponent';
import EmployeePropsComponent from './class-component-props/EmployeePropsComponent';
import EmployeeParentPropsComponent from './class-component-props/EmployeeParentPropsComponent';
import ParentFunctionalComponent from './functional-component-props/ParentFunctionalComponent';
import ParentDefaultPropsComponent from './class-component-default-props/ParentDefaultPropsComponent';
import ArrayPropsComponent from './class-component-default-props/ArrayPropsComponent';
//import ParentComponent from './comm/ParentComponent';
import ParentComponentReceiver from './comm/ParentComponentReceiver';
import LifeCycleComponentMounting from './lifecycle/LifeCycleComponentMounting';
import LifeCycleComponentUpdating from './lifecycle/LifeCycleComponentUpdating';
import ParentComponent from './lifecycle/ParentComponent';
import RootComponent from './lifecycle/RootComponent';
import reportWebVitals from './reportWebVitals';
import AllEmployeeRetrieveComponent from './axios/AllEmployeeRetrieveComponent';
import DynamicDropDownComponent from './axios/DynamicDropDownComponent';
import MultipleServicesComponent from './axios/MultipleServicesComponent';
import PostEmployeeDataComponent from './fetch/PostEmployeeDataComponent';
import PostEmployeeDataAxios from './axios/PostEmployeeDataAxios';
//ReactDOM.render(<EmployeeComponent/>,document.getElementById('root'));
//ReactDOM.render(<EmployeeRootComponent/>,document.getElementById('root'));
//ReactDOM.render(<EmployeeRootFunctionalComponent/>,document.getElementById('root'));
//ReactDOM.render(<JSXComponent/>,document.getElementById('root'));
//ReactDOM.render(<EmployeeDetails/>,document.getElementById('root'));
//ReactDOM.render(<FragmentComponent/>,document.getElementById('root'));
//ReactDOM.render(<EmployeeStateComponent/>,document.getElementById('root'));
//ReactDOM.render(<EmployeeModifyStateRegularFunction/>,document.getElementById('root'));
//ReactDOM.render(<EmployeeModifyStateArrowFunction/>,document.getElementById('root'));
//ReactDOM.render(<MaintainStateFunctionalComponent/>,document.getElementById('root'));
//ReactDOM.render(<EmployeePropsComponent empId={1001} empName="sabbir" empSalary={23000} empDesignation="Trainer"/>,document.getElementById('root'));
//ReactDOM.render(<EmployeeParentPropsComponent/>,document.getElementById('root'));
//ReactDOM.render(<ParentFunctionalComponent/>,document.getElementById('root'));
//ReactDOM.render(<ParentDefaultPropsComponent header={23333}/>,document.getElementById('root'));
const names=['pavan','ashwini','rohan'];
//ReactDOM.render(<ArrayPropsComponent passArray={names}/>,document.getElementById('root'));
//ReactDOM.render(<ParentComponent/>,document.getElementById('root'));
//ReactDOM.render(<ParentComponentReceiver/>,document.getElementById('root'));
//ReactDOM.render(<LifeCycleComponentMounting empNameProp="sabbir"/>,document.getElementById('root'));
//ReactDOM.render(<LifeCycleComponentUpdating/>,document.getElementById('root'));
//ReactDOM.render(<ParentComponent/>,document.getElementById('root'));
/*ReactDOM.render(
    <React.StrictMode>
    <RootComponent/>
    </React.StrictMode>,
    document.getElementById('root')
);
setTimeout(()=>{
ReactDOM.unmountComponentAtNode(document.getElementById('root'));
},10000)
*/
ReactDOM.render(<EmployeeComponent/>,document.getElementById('root'));
//ReactDOM.render(<PostEmployeeDataAxios/>,document.getElementById('root'));
//ReactDOM.render(<DynamicDropDownComponent/>,document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
